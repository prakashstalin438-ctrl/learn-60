import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export const INTERVIEW_QUESTIONS = [
  {
    category: "LLM & Prompting",
    questions: [
      {
        id: "iq-1",
        q: "What is the difference between Temperature and Top-p sampling?",
        a: "Temperature scales the logits before Softmax (lower = more deterministic/greedy; higher = flatter probabilities). Top-p (nucleus sampling) truncates the probability distribution to retain only the smallest cumulative set of tokens exceeding probability p."
      },
      {
        id: "iq-2",
        q: "Explain KV Cache in LLM inference and why it matters.",
        a: "During autoregressive decoding, recomputing Key and Value matrices for all previous tokens in every step is O(N^2). KV caching stores past Key and Value vectors in GPU memory, reducing per-token generation complexity to O(N)."
      },
      {
        id: "iq-3",
        q: "What is Chain-of-Thought (CoT) prompting?",
        a: "CoT encourages models to decompose multi-step problems into intermediate explicit reasoning steps before producing the final answer, significantly improving accuracy on symbolic, arithmetic, and logic tasks."
      }
    ]
  },
  {
    category: "RAG & Embeddings",
    questions: [
      {
        id: "iq-4",
        q: "What is the difference between a Bi-Encoder and a Cross-Encoder?",
        a: "Bi-Encoders encode query and document into separate vector embeddings independently (fast, O(1) similarity lookup with FAISS). Cross-Encoders pass both query and document into the Transformer together with full cross-attention (much more accurate, but slower O(N) compute, ideal for reranking top candidates)."
      },
      {
        id: "iq-5",
        q: "Explain the RAG Triad evaluation metrics.",
        a: "1. Context Relevance: Are the retrieved chunks relevant to the query? 2. Faithfulness/Groundedness: Is the generated answer strictly backed by the context without hallucination? 3. Answer Relevance: Does the generated answer directly address the user's question?"
      },
      {
        id: "iq-6",
        q: "What is Hybrid Search and why is it necessary?",
        a: "Dense semantic vector search can struggle with exact keyword matches, serial numbers, product codes, or acronyms. Hybrid search combines dense vector retrieval with sparse BM25 keyword matching via Reciprocal Rank Fusion (RRF)."
      }
    ]
  },
  {
    category: "AI Agents",
    questions: [
      {
        id: "iq-7",
        q: "How does function/tool calling work under the hood in LLMs?",
        a: "Tools are supplied to the LLM as JSON Schemas in the system/request prompt. When the LLM decides to call a tool, it outputs a structured JSON payload with tool_name and arguments instead of regular text. The client executes the function and passes the return value back as a tool role message."
      },
      {
        id: "iq-8",
        q: "What is the ReAct loop?",
        a: "ReAct combines Reasoning (Thought) and Acting (Action + Action Input) iteratively. The agent ponders the current state, selects a tool, receives the Observation, and decides the next thought until reaching a Final Answer."
      }
    ]
  },
  {
    category: "System Design & Production",
    questions: [
      {
        id: "iq-9",
        q: "How do you mitigate Prompt Injection in enterprise applications?",
        a: "Use strict delimiter XML/markdown tags around user inputs, apply input validation guardrails (NeMo / Llama Guard), enforce Pydantic output validation, and implement least-privilege tool execution permissions."
      },
      {
        id: "iq-10",
        q: "What is Semantic Caching and what are its trade-offs?",
        a: "Semantic caching embeds incoming queries and checks if an identical or near-identical query exists in a vector store above a high threshold (e.g. cosine > 0.96). If so, it returns the cached response with zero LLM API cost and sub-50ms latency."
      }
    ]
  }
];

export default function InterviewPage() {
  const [selectedCat, setSelectedCat] = useState("LLM & Prompting");
  const [expandedQ, setExpandedQ] = useState(null);
  const { isTaskCompleted, toggleTask } = useProgress();

  const currentQuestions = INTERVIEW_QUESTIONS.find(c => c.category === selectedCat)?.questions || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
          Interview Preparation
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          High-yield technical questions across all core GenAI domains
        </p>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
        {INTERVIEW_QUESTIONS.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCat(cat.category)}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              background: selectedCat === cat.category ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedCat === cat.category ? '#070a13' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentQuestions.map((item) => {
          const isMastered = isTaskCompleted(`interview-mastered-${item.id}`);
          const isOpen = expandedQ === item.id;

          return (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '14px 16px',
                borderLeft: isMastered ? '3px solid var(--green-success)' : '1px solid var(--border-card)'
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', cursor: 'pointer' }}
                onClick={() => setExpandedQ(isOpen ? null : item.id)}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    {item.q}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTask(`interview-mastered-${item.id}`);
                    }}
                    className="custom-checkbox-btn"
                    title={isMastered ? 'Mastered' : 'Mark as Mastered'}
                  >
                    {isMastered ? <CheckCircle2 size={18} color="var(--green-success)" /> : <Circle size={18} />}
                  </button>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {isOpen && (
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
