---
layout: page
title: Enterprise Cognitive Hybrid RAG Platform
description: High-throughput enterprise knowledge engine combining Dense Vector & BM25 Sparse Search with Cross-Encoder reranking and sub-500ms P99 latency.
img: assets/img/12.jpg
importance: 1
category: work
github: https://github.com/ashutoshsom1
---

## 📌 Executive Overview

An enterprise-grade **Retrieval-Augmented Generation (RAG)** platform engineered to index, retrieve, and synthesize contextual intelligence across **100,000+ complex corporate documents** (PDFs, contracts, technical specifications, and internal wikis). 

Traditional naive RAG architectures suffer from context dilution, semantic drift, and high latency. This platform resolves those bottlenecks through a **Two-Stage Hybrid Search Pipeline**, dynamic **Reciprocal Rank Fusion (RRF)**, deep **Cross-Encoder Reranking**, and an in-memory **Semantic Vector Cache**.

---

## 🏗️ High-Level System Architecture

```text
[Enterprise Client / API] ──► [FastAPI Gateway]
                                      │
                                      ▼
                        [Semantic Cache (Redis)] ──► (Cache Hit: <25ms response)
                                      │ (Cache Miss)
                                      ▼
                         [Hybrid Retrieval Layer]
                         ├── Dense Vector: Qdrant / Azure AI Search (HNSW Index: 20ms)
                         └── Sparse Lexical: BM25 (Exact Token Match: 15ms)
                                      │
                                      ▼
                       [Reciprocal Rank Fusion (Top 50)]
                                      │
                                      ▼
                     [Cross-Encoder Reranker (Top 5)]
                       (bge-reranker-large: 35ms)
                                      │
                                      ▼
                     [vLLM / Azure OpenAI (Streaming)]
```

---

## ⚡ Core Technical Innovations

### 1. Hybrid Search Fusion with Reciprocal Rank Fusion (RRF)
Naive vector search struggles with exact keywords (part numbers, error codes, legal clauses), while keyword search fails on semantic intent. 
The retrieval engine runs parallel queries across dense vector embeddings (`text-embedding-3-large`) and sparse BM25 indices, combining candidate ranks using Reciprocal Rank Fusion:

$$\text{RRF Score}(d) = \sum_{m \in M} \frac{1}{k + r_m(d)}$$

Where $k=60$ acts as a smoothing factor to stabilize ranking variances between dense and sparse results.

### 2. Deep Cross-Encoder Reranking
Dense retrievers encode query and document independently (Bi-Encoder), sacrificing cross-attention token interactions. 
We feed the Top 50 fused candidates through a **Cross-Encoder reranker** (`bge-reranker-large`), computing full all-to-all attention between query tokens and document tokens. This elevated **Context Precision from 68% to 94.2%**.

### 3. Sub-25ms Semantic Caching (Redis)
Implemented a vector-based semantic cache storing prior query embeddings. Incoming queries with a cosine similarity score $> 0.92$ against cached vectors are served directly from Redis in **under 25ms**, slashing LLM API token consumption by **42%**.

---

## 📊 Quantified Production Benchmarks

- **P99 Query Latency:** Sub-500ms end-to-end response time.
- **Context Precision:** 94.2% (via Ragas evaluation framework).
- **Faithfulness Score:** 96.4% factual grounding against source documents (zero hallucinations).
- **Cost Reduction:** 42% decrease in recurring token spend through semantic caching and chunk deduplication.

---

## 🛠️ Technology Stack

- **Orchestration:** Python, LangChain, Semantic Kernel, FastAPI
- **Vector & Lexical Search:** Qdrant, Azure AI Search, BM25, HNSW indexing
- **Models:** Azure OpenAI (GPT-4o), Anthropic Claude 3.5 Sonnet, `bge-reranker-large`
- **Caching & Storage:** Redis (Vector Store & Semantic Cache), PostgreSQL
- **Evaluation & CI/CD:** Ragas, Docker, Azure DevOps
