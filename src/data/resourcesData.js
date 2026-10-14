export const RESOURCES_DATA = [
  {
    category: "LLM & Foundation Models",
    items: [
      { title: "Attention Is All You Need (Vaswani et al.)", type: "Paper", url: "https://arxiv.org/abs/1706.03762", desc: "The foundational paper introducing the Transformer architecture." },
      { title: "Andrej Karpathy: Let's build GPT from scratch", type: "Video", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", desc: "Gold standard 2-hour walkthrough building nanoGPT." },
      { title: "Hugging Face NLP Course", type: "Course", url: "https://huggingface.co/learn/nlp-course", desc: "Comprehensive free course covering tokenizers, models, and fine-tuning." }
    ]
  },
  {
    category: "RAG & Vector Search",
    items: [
      { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", type: "Paper", url: "https://arxiv.org/abs/2005.11401", desc: "The original RAG paper by Lewis et al. at Facebook AI Research." },
      { title: "ChromaDB Documentation & Getting Started", type: "Docs", url: "https://docs.trychroma.com/", desc: "Official guide to embedding storage, querying, and metadata filters." },
      { title: "Pinecone Learning Center: Vector Search Basics", type: "Guide", url: "https://www.pinecone.io/learn/", desc: "Clear explanations of HNSW, IVF, and similarity metrics." }
    ]
  },
  {
    category: "Prompt Engineering & Structured Outputs",
    items: [
      { title: "OpenAI Prompt Engineering Guide", type: "Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", desc: "Official best practices: delimiters, CoT, system directives." },
      { title: "Learn Prompting (Interactive Course)", type: "Course", url: "https://learnprompting.org/", desc: "Structured guide from beginner to advanced reasoning prompts." },
      { title: "Pydantic Documentation", type: "Docs", url: "https://docs.pydantic.dev/", desc: "Fast data validation using Python type hints for LLM schemas." }
    ]
  },
  {
    category: "Autonomous AI Agents",
    items: [
      { title: "ReAct: Synergizing Reasoning and Acting in Language Models", type: "Paper", url: "https://arxiv.org/abs/2210.03629", desc: "Seminal paper on interleaving thought steps with tool execution." },
      { title: "Lilian Weng: LLM Powered Autonomous Agents", type: "Blog", url: "https://lilianweng.github.io/posts/2023-06-23-agent/", desc: "The most cited architectural overview of modern AI agents." }
    ]
  }
];
