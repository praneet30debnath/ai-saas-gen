#!/usr/bin/env python3
"""Tests for ai-saas-gen Node.js CLI tool."""

import json
import os
import subprocess
import sys
import tempfile

TOOL_DIR = os.path.dirname(os.path.abspath(__file__))
CLI = os.path.join(TOOL_DIR, "src", "cli.js")


def run_cli(*args):
    result = subprocess.run(
        ["node", CLI] + list(args),
        capture_output=True, text=True, timeout=15
    )
    return result


def test_help():
    r = run_cli("--help")
    assert r.returncode == 0, f"Help failed: {r.stderr}"
    assert "ai-saas-gen" in r.stdout
    assert "USAGE" in r.stdout
    assert "OPTIONS" in r.stdout


def test_list_verticals():
    r = run_cli("--list")
    assert r.returncode == 0, f"List failed: {r.stderr}"
    assert "pet grooming" in r.stdout
    assert "dental" in r.stdout
    assert "Known Industry Verticals" in r.stdout


def test_generate_known_niche():
    r = run_cli("pet grooming")
    assert r.returncode == 0, f"Generate failed: {r.stderr}"
    assert "pet grooming" in r.stdout.lower()
    assert "EXECUTIVE SUMMARY" in r.stdout
    assert "FEATURES" in r.stdout
    assert "PRICING" in r.stdout
    assert "TECH STACK" in r.stdout


def test_generate_unknown_niche():
    r = run_cli("underwater basket weaving")
    assert r.returncode == 0, f"Unknown niche failed: {r.stderr}"
    assert "EXECUTIVE SUMMARY" in r.stdout


def test_json_output():
    r = run_cli("dental", "--json")
    assert r.returncode == 0, f"JSON failed: {r.stderr}"
    data = json.loads(r.stdout)
    assert "business" in data
    assert "features" in data
    assert "techStack" in data
    assert "pricing" in data
    assert data["business"]["niche"] == "dental"
    assert data["business"]["tam"] == "$3.7B"


def test_markdown_output():
    r = run_cli("fitness", "--md")
    assert r.returncode == 0, f"Markdown failed: {r.stderr}"
    assert "# " in r.stdout
    assert "fitness" in r.stdout.lower()
    assert "## Features" in r.stdout
    assert "## Pricing" in r.stdout


def test_html_output():
    r = run_cli("restaurant", "--html")
    assert r.returncode == 0, f"HTML failed: {r.stderr}"
    assert "<!DOCTYPE html>" in r.stdout
    assert "restaurant" in r.stdout.lower()


def test_budget_flag():
    r = run_cli("legal", "--budget", "funded", "--json")
    assert r.returncode == 0, f"Budget flag failed: {r.stderr}"
    data = json.loads(r.stdout)
    assert data["business"]["budget"] == "funded"
    assert data["techStack"]["auth"] in ("Clerk / Auth0", "Auth0")


def test_output_directory():
    with tempfile.TemporaryDirectory() as tmpdir:
        outdir = os.path.join(tmpdir, "test-output")
        r = run_cli("education", "-o", outdir, "--json")
        assert r.returncode == 0, f"Output dir failed: {r.stderr}"
        assert os.path.isfile(os.path.join(outdir, "plan.json"))
        assert os.path.isfile(os.path.join(outdir, "plan.md"))
        assert os.path.isfile(os.path.join(outdir, "landing.html"))
        assert os.path.isfile(os.path.join(outdir, "deploy-guide.md"))

        with open(os.path.join(outdir, "plan.json")) as f:
            data = json.load(f)
        assert data["business"]["niche"] == "education"


def test_no_args_error():
    r = run_cli()
    assert r.returncode != 0


def test_all_verticals_generate():
    r = run_cli("--list")
    lines = r.stdout.strip().split("\n")
    # Extract vertical names from the list output
    verticals_found = 0
    for line in lines:
        line = line.strip()
        if line and not line.startswith("─") and not line.startswith("Industry") and not line.startswith("Known") and "niche" not in line.lower() and line:
            # Try to extract the vertical name (first column, before the market size)
            parts = line.split("$")
            if len(parts) >= 2:
                name = parts[0].strip()
                # Remove ANSI codes
                import re
                name = re.sub(r'\x1b\[[0-9;]*m', '', name).strip()
                if name:
                    verticals_found += 1
    assert verticals_found >= 20, f"Found only {verticals_found} verticals"


def test_programmatic_api():
    """Test that the Node.js module can be required and used."""
    r = subprocess.run(
        ["node", "-e", """
const { generate, listVerticals } = require('./src/index');
const plan = generate('dental', { budget: 'seed' });
console.log(JSON.stringify({
  hasName: !!plan.business.name,
  hasTam: !!plan.business.tam,
  featureCount: plan.features.length,
  hasHtml: plan.landingHTML.includes('<!DOCTYPE'),
  hasMarkdown: plan.markdown.includes('# '),
  verticalCount: listVerticals().length
}));
"""],
        capture_output=True, text=True, timeout=15, cwd=TOOL_DIR
    )
    assert r.returncode == 0, f"API test failed: {r.stderr}"
    data = json.loads(r.stdout)
    assert data["hasName"] is True
    assert data["hasTam"] is True
    assert data["featureCount"] >= 5
    assert data["hasHtml"] is True
    assert data["hasMarkdown"] is True
    assert data["verticalCount"] >= 20


if __name__ == "__main__":
    tests = [v for k, v in sorted(globals().items()) if k.startswith("test_")]
    passed = 0
    failed = 0
    for t in tests:
        try:
            t()
            passed += 1
            print(f"  PASS  {t.__name__}")
        except Exception as e:
            failed += 1
            print(f"  FAIL  {t.__name__}: {e}")

    print(f"\n{'='*40}")
    print(f"  {passed} passed, {failed} failed out of {len(tests)}")
    if failed:
        sys.exit(1)
