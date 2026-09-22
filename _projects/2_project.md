---
layout: page
title: Multi-Agent Autonomous Incident Triage Engine
description: Fault-tolerant multi-agent state machine using LangGraph and Model Context Protocol (MCP) with Human-in-the-Loop Slack approval gates.
img: assets/img/7.jpg
importance: 2
category: work
github: https://github.com/ashutoshsom1
---

## 📌 Executive Overview

**IncidentOps AI** is an autonomous multi-agent diagnostic engine designed to handle enterprise cloud infrastructure alerts and production incidents.

When high-severity alerts fire from monitoring tools (Datadog, Prometheus, Azure Monitor), human engineers typically waste 30 to 45 minutes manually collecting logs, correlating metrics, and triaging root causes. IncidentOps AI automates this entire diagnostic workflow within 90 seconds using **collaborating autonomous agents** orchestrated via **LangGraph** and the **Model Context Protocol (MCP)**.

---

## 🏗️ Multi-Agent State Machine Architecture

```text
               [Alert Webhook (Prometheus / PagerDuty)]
                                  │
                                  ▼
                     [Supervisor / Planner Agent]
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
[Log Diagnostic Agent]  [Metrics Correlation Agent]  [Codebase Inspection Agent]
   (Elasticsearch / Loki)    (Prometheus TSDB)         (GitHub / GitLab API)
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  │
                                  ▼
                     [Root Cause Synthesis Node]
                                  │
                                  ▼
                   [Human-in-the-Loop Approval Gate]
                    (Slack Interactive Webhook)
                     ├── Approve ──► Execute Remediation Script
                     └── Reject  ──► Escalate to On-Call Engineer
```

---

## ⚡ Core Technical Innovations

### 1. LangGraph StateGraph with Deterministic FSM Semantics

Single-prompt ReAct loops are prone to infinite loops and context blowouts. IncidentOps AI uses **LangGraph StateGraph** to enforce a deterministic finite-state machine with:

- **Typed State Schemas:** Pydantic V2 models defining exact diagnostic payloads passed between nodes.
- **Loop-Bound Guards:** Hard limits on retry counts to prevent cascading LLM token spend.
- **Persistent State Checkpointing:** Every node transition is checkpointed to PostgreSQL, allowing full state recovery if worker containers crash.

### 2. Model Context Protocol (MCP) Tool Integration

Standardized tool execution using Anthropic's **Model Context Protocol (MCP)**. Agents query logs, query Kubernetes clusters, and fetch Git commit diffs through decoupled, secure MCP servers, ensuring zero credential exposure to LLM contexts.

### 3. Human-in-the-Loop (HITL) Gate

Remediation actions (e.g., restarting K8s pods, clearing Redis caches, rolling back canary deployments) cannot be executed autonomously without human oversight. The state graph halts execution, sends an interactive rich card to **Slack/Microsoft Teams**, and resumes execution only upon receiving signed HMAC webhook authorization from the on-call engineer.

---

## 📊 Quantified Production Benchmarks

- **Mean Time to Triage (MTTT):** Slashed from **38 minutes to 90 seconds** (96% reduction).
- **Incident Escalation Accuracy:** 92% root cause diagnostic accuracy validated against post-mortem reports.
- **Zero Accidental Outages:** 100% of destructive remediation scripts gated behind Human-in-the-Loop authorization.

---

## 🛠️ Technology Stack

- **Agent Orchestration:** LangGraph, LangChain, Anthropic Claude 3.5 Sonnet / Claude Agent SDK
- **Protocols & Schemas:** Model Context Protocol (MCP), Pydantic V2
- **Backend & State:** Python (AsyncIO), PostgreSQL Checkpointer, Docker
- **Integrations:** Slack API, Microsoft Teams Webhooks, Prometheus, Kubernetes API
