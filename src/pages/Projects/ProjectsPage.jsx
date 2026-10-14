import React from 'react';
import { FolderGit2, CheckCircle2, Circle, ExternalLink, Code2 } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

export const PROJECTS_DATA = [
  {
    id: 1,
    dayTrigger: 28,
    title: "Project 1 — LLM Q&A + Summarizer",
    description: "Multi-style executive summarizer and context-aware Q&A application powered by LLM API with structured schemas.",
    skills: ["LLM API", "Prompt Engineering", "Structured Output", "Validation", "UI"],
    checklist: [
      "Set up LLM provider client with retry and error handling",
      "Design zero-shot and few-shot prompt templates for summarization",
      "Implement Pydantic schema for strict JSON response output",
      "Build context-grounded Q&A mechanism with input sanitization",
      "Create clean web user interface and test with 10 documents"
    ]
  },
  {
    id: 2,
    dayTrigger: 35,
    title: "Project 2 — Document Intelligence RAG",
    description: "End-to-end multi-document RAG pipeline with parsing, chunking, vector embeddings, ChromaDB, and strict inline citations.",
    skills: ["Document Upload", "Parsing", "Chunking", "Embeddings", "Vector DB", "Retrieval", "Citations"],
    checklist: [
      "Multi-format document ingestion pipeline (PDF, Markdown, TXT)",
      "Recursive character chunking with 15% sliding window overlap",
      "Generate dense embeddings and index in persistent ChromaDB",
      "Retrieve top-k chunks with metadata filtering",
      "Prompt LLM with grounded context and format inline citations [1]"
    ]
  },
  {
    id: 3,
    dayTrigger: 42,
    title: "Project 3 — Production RAG",
    description: "Enterprise-grade RAG pipeline featuring hybrid search (BM25 + Dense), Cross-Encoder reranking, and Ragas evaluation.",
    skills: ["Advanced Retrieval", "Hybrid Search", "Reranking", "Query Transformation", "Evaluation", "API", "Deployment"],
    checklist: [
      "Implement BM25 lexical retriever alongside dense vector search",
      "Merge results with Reciprocal Rank Fusion (RRF)",
      "Add Cross-Encoder reranker to score top 5 candidate chunks",
      "Implement HyDE (Hypothetical Document Embeddings) query rewriter",
      "Set up automated Ragas evaluation suite for Faithfulness & Recall"
    ]
  },
  {
    id: 4,
    dayTrigger: 49,
    title: "Project 4 — AI Research / Support Agent",
    description: "Autonomous agent capable of multi-step planning, tool/function calling, conversational memory, and FastAPI deployment.",
    skills: ["Tool Calling", "Memory/State", "Multi-Step Workflow", "Error Handling", "Evaluation", "Backend API"],
    checklist: [
      "Define JSON Schema function tools (Web Search, Calculator, DB Query)",
      "Build ReAct or Plan-and-Execute reasoning execution loop",
      "Implement sliding window buffer memory and persistent session state",
      "Add input guardrails, recursion caps, and tool error self-correction",
      "Expose via FastAPI streaming endpoint with Swagger documentation"
    ]
  }
];

export default function ProjectsPage({ onSelectDay }) {
  const { isDayCompleted, isTaskCompleted, toggleTask } = useProgress();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
          4 Major Capstones
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Portfolio-defining projects from the 60-day roadmap
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {PROJECTS_DATA.map((proj) => {
          const isUnlocked = isDayCompleted(proj.dayTrigger);

          let completedCount = 0;
          proj.checklist.forEach((_, idx) => {
            if (isTaskCompleted(`project-${proj.id}-task-${idx}`)) completedCount++;
          });
          const pct = Math.round((completedCount / proj.checklist.length) * 100);

          return (
            <div key={proj.id} className="glass-card" style={{ padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--cyan-primary)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    Capstone • Day {proj.dayTrigger}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
                    {proj.title}
                  </h3>
                </div>
                <button
                  onClick={() => onSelectDay(proj.dayTrigger)}
                  className="custom-checkbox-btn"
                  title="Jump to Roadmap Day"
                  style={{ color: 'var(--cyan-primary)', fontSize: '0.75rem', gap: '4px' }}
                >
                  <ExternalLink size={16} />
                </button>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.45 }}>
                {proj.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '12px 0' }}>
                {proj.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.7rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div style={{ margin: '10px 0 14px 0' }}>
                <ProgressBar value={completedCount} max={proj.checklist.length} showLabel={true} isSuccess={pct === 100} />
              </div>

              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {proj.checklist.map((item, idx) => {
                  const taskId = `project-${proj.id}-task-${idx}`;
                  const checked = isTaskCompleted(taskId);

                  return (
                    <div
                      key={taskId}
                      className={`task-item ${checked ? 'checked' : ''}`}
                      onClick={() => toggleTask(taskId)}
                    >
                      <div style={{ marginTop: '2px', color: checked ? 'var(--green-success)' : 'var(--text-muted)' }}>
                        {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                      </div>
                      <span className="task-text">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
