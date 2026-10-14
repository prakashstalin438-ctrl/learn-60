/**
 * GenAI 60-Day Progress Tracker - Official Curriculum Roadmap Data
 * Sourced directly from GENAI_60_DAY_ANTIGRAVITY_MASTER_PLAN.md
 * Contains all 60 days, authentic learning checklists, practice tasks, mini-builds, and interview prep.
 */

export const WEEKS_DATA = [
  {
    week: 1,
    title: "AI + Python Engineering",
    description: "Build an unshakeable foundation in AI/ML hierarchy and robust Python software engineering.",
    dayRange: "Days 1 – 7",
    milestoneDay: 7,
    milestoneTitle: "Foundation Started"
  },
  {
    week: 2,
    title: "Data + ML + RL Awareness",
    description: "Master real-world data preprocessing, classical supervised/unsupervised ML algorithms, and RL basics.",
    dayRange: "Days 8 – 14",
    milestoneDay: 14,
    milestoneTitle: "ML Foundation"
  },
  {
    week: 3,
    title: "Deep Learning + NLP",
    description: "Grasp neural network architectures, backprop, CNNs, sequence models, and Transformer mechanics.",
    dayRange: "Days 15 – 21",
    milestoneDay: 21,
    milestoneTitle: "DL + NLP"
  },
  {
    week: 4,
    title: "LLM + Prompt + Hugging Face",
    description: "Understand tokens, context windows, prompt patterns, structured outputs, Hugging Face, and build Project 1.",
    dayRange: "Days 22 – 28",
    milestoneDay: 28,
    milestoneTitle: "First GenAI Project"
  },
  {
    week: 5,
    title: "Embeddings + RAG Foundation",
    description: "Deep dive into vector math, vector DBs (FAISS/Chroma), chunking, and build Document Intelligence RAG.",
    dayRange: "Days 29 – 35",
    milestoneDay: 35,
    milestoneTitle: "RAG Built"
  },
  {
    week: 6,
    title: "Advanced RAG + Fine-Tuning",
    description: "Implement hybrid search, rerankers, query rewriting, RAG Triad evaluation, and LoRA/PEFT concepts.",
    dayRange: "Days 36 – 42",
    milestoneDay: 42,
    milestoneTitle: "Advanced RAG"
  },
  {
    week: 7,
    title: "Agents + Backend",
    description: "Transition from RAG to Autonomous Agents: Tool calling, memory, planning loops, FastAPI backend.",
    dayRange: "Days 43 – 49",
    milestoneDay: 49,
    milestoneTitle: "Agent Built"
  },
  {
    week: 8,
    title: "Applications + Production + Career",
    description: "Full-stack GenAI application patterns, Streamlit/Gradio, Dockerization, CI/CD, telemetry, and system design.",
    dayRange: "Days 50 – 56",
    milestoneDay: 56,
    milestoneTitle: "Production Skills"
  },
  {
    week: 9,
    isFinal: true,
    title: "Final 4 Days — Capstone & Career",
    description: "End-to-end hardening of all 4 capstones, portfolio polish, comprehensive mock interviews, and application sprint.",
    dayRange: "Days 57 – 60",
    milestoneDay: 60,
    milestoneTitle: "GenAI Strong Fresher"
  }
];

export const ROADMAP_DAYS = [
  // ==========================================
  // WEEK 1: AI + PYTHON ENGINEERING (Days 1-7)
  // ==========================================
  {
    day: 1,
    week: 1,
    topic: "AI, ML, DL, GenAI + data science fundamentals",
    description: "Understand the core taxonomy: AI vs ML vs DL vs Generative AI, foundational data science concepts, and how the modern AI ecosystem fits together.",
    learningChecklist: [
      "Differentiate Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI",
      "Understand Discriminative vs. Generative models with concrete real-world examples",
      "Learn the role of data science in the modern AI lifecycle",
      "Explore the evolution from rule-based expert systems to foundation models"
    ],
    practiceTask: "Create a clear visual summary or mind-map diagram contrasting AI, ML, DL, and GenAI with 2 industry use cases each.",
    miniBuild: "Write a short Python script comparing deterministic rule-based logic against stochastic generative text completion.",
    interviewPrep: [
      "What is the fundamental difference between Discriminative and Generative models?",
      "Why did Deep Learning become dominant over traditional ML in natural language processing?",
      "Can you explain the difference between parameters and hyperparameters?"
    ],
    milestone: null
  },
  {
    day: 2,
    week: 1,
    topic: "Problem framing, ML lifecycle, training/inference and evaluation basics",
    description: "Learn how real engineering teams frame problems: defining objectives, data collection, train/validation/test splits, inference bottlenecks, and evaluation metrics.",
    learningChecklist: [
      "Master the 5 stages of the ML lifecycle: framing, data prep, modeling, evaluation, deployment",
      "Understand training vs inference: latency, compute, memory, and cost tradeoffs",
      "Learn essential evaluation metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC, MAE, RMSE",
      "Understand Overfitting, Underfitting, and the Bias-Variance tradeoff"
    ],
    practiceTask: "Given a hypothetical business problem (e.g. customer churn or support ticket categorization), write a 1-page ML Problem Framing Document.",
    miniBuild: "Implement basic Python functions from scratch for Precision, Recall, and F1-score without using scikit-learn.",
    interviewPrep: [
      "When is Accuracy a misleading metric? What should you use instead?",
      "How do you detect and mitigate overfitting in a machine learning model?",
      "What is data leakage and how do you prevent it during preprocessing?"
    ],
    milestone: null
  },
  {
    day: 3,
    week: 1,
    topic: "Python basics: variables, types, conditions, loops, input/output",
    description: "Solidify Python fundamentals required for data manipulation and AI scripting: clean syntax, type hints, loops, and efficient I/O.",
    learningChecklist: [
      "Review primitive types: int, float, str, bool, and dynamic typing nuances",
      "Master conditional control flow: if/elif/else, ternary expressions, pattern matching",
      "Master iterative patterns: for, while, enumerate(), zip(), break/continue/pass",
      "File I/O basics: context managers ('with open'), reading/writing text and JSON files"
    ],
    practiceTask: "Write a script that parses a multi-line raw text log file, filters error lines, and extracts timestamp and error codes.",
    miniBuild: "Build a CLI-based interactive prompt that collects user input and logs structured session history to a JSON file.",
    interviewPrep: [
      "Explain the difference between mutable and immutable types in Python.",
      "How does Python's memory management work, and what is the GIL?",
      "Why is 'with' statement preferred for file operations?"
    ],
    milestone: null
  },
  {
    day: 4,
    week: 1,
    topic: "Functions, lists, tuples, sets, dictionaries, comprehensions",
    description: "Master Python's core data structures and functional programming paradigms that power AI pipelines.",
    learningChecklist: [
      "Functions: *args, **kwargs, default parameters, docstrings, type annotations",
      "Deep dive into Lists, Tuples, Sets, and Dictionaries: lookup complexities and operations",
      "List, Dict, and Set comprehensions with conditional filtering",
      "Higher-order functional tools: map(), filter(), sorted() with lambda functions"
    ],
    practiceTask: "Process a simulated dataset of LLM prompt records: filter by latency < 500ms, group by model name using dict comprehensions.",
    miniBuild: "Build a text token frequency counter function returning top-k words using dictionaries and set operations.",
    interviewPrep: [
      "What is the average time complexity of dictionary lookups in Python and why?",
      "What is the difference between a list and a tuple in memory allocation and immutability?",
      "Explain how *args and **kwargs work in Python function definitions."
    ],
    milestone: null
  },
  {
    day: 5,
    week: 1,
    topic: "OOP, exceptions, modules, file handling, virtual environments",
    description: "Learn clean software engineering practices: Object-Oriented Programming (OOP), modular project organization, error handling, and virtual envs.",
    learningChecklist: [
      "OOP core pillars: Classes, Objects, __init__, self, inheritance, and encapsulation",
      "Dunder methods: __str__, __repr__, __len__, __getitem__",
      "Custom exceptions and robust try/except/finally blocks",
      "Project packaging: virtual environments (venv/uv), requirements.txt, modular imports"
    ],
    practiceTask: "Design an LLMClient base class with an abstract generate() method, and implement a MockLLMClient subclass with retry logic.",
    miniBuild: "Build a modular Python package with 2 modules: an API caller and a response validator with custom exception handling.",
    interviewPrep: [
      "Explain the difference between class methods, static methods, and instance methods in Python.",
      "What are Python dunder (magic) methods, and where are they commonly used in AI frameworks?",
      "How do you structure a production-ready Python project repository?"
    ],
    milestone: null
  },
  {
    day: 6,
    week: 1,
    topic: "Regex + NumPy + Pandas fundamentals",
    description: "Essential data wrangling tools: Regular expressions for text extraction, NumPy array operations, and Pandas DataFrames.",
    learningChecklist: [
      "Regex essentials: pattern matching, extraction (re.findall, re.sub), group captures",
      "NumPy arrays: shapes, broadcasting, vectorization, matrix multiplications, dot products",
      "Pandas DataFrame: indexing (loc, iloc), filtering, groupby, handling nulls, apply()",
      "Converting unstructured text data into structured tabular representations"
    ],
    practiceTask: "Clean a messy dataset of customer feedback reviews: strip HTML tags using regex, normalize whitespace, and compute average token lengths in Pandas.",
    miniBuild: "Implement cosine similarity calculation using pure NumPy vector operations without external ML libraries.",
    interviewPrep: [
      "Why is vectorized execution in NumPy significantly faster than standard Python loops?",
      "What is broadcasting in NumPy, and what are its dimension compatibility rules?",
      "Explain the difference between .loc and .iloc in Pandas."
    ],
    milestone: null
  },
  {
    day: 7,
    week: 1,
    topic: "Revision + coding practice + interview questions",
    description: "Consolidate Week 1 learning, solve LeetCode/HackerRank style Python problems, and review core ML/Python interview questions.",
    learningChecklist: [
      "Comprehensive review of Python fundamentals, data structures, and OOP",
      "Solve 3 medium data manipulation and string parsing coding problems",
      "Self-test on AI/ML taxonomy and evaluation metrics",
      "Milestone 1 check: confirm ability to write clean, modular, typed Python scripts"
    ],
    practiceTask: "Solve 'Valid Anagram', 'Group Anagrams', and 'Top K Frequent Words' in Python with clean time/space complexity analysis.",
    miniBuild: "Assemble a mini CLI utility that loads a CSV, runs regex data cleaning, and prints summary metrics.",
    interviewPrep: [
      "Full review of all Day 1-6 interview questions",
      "Explain generator functions and the 'yield' keyword in Python",
      "How do list comprehensions differ from generator expressions in memory consumption?"
    ],
    milestone: {
      id: "milestone-1",
      day: 7,
      title: "Foundation Started",
      description: "Solid grasp of AI/ML fundamentals and Python engineering essentials."
    }
  },

  // ==========================================
  // WEEK 2: DATA + ML + RL AWARENESS (Days 8-14)
  // ==========================================
  {
    day: 8,
    week: 2,
    topic: "Data cleaning, missing values, encoding and transformations",
    description: "Prepare raw datasets for machine learning models: imputation strategies, categorical encoding, scaling, and feature transformation.",
    learningChecklist: [
      "Missing value strategies: mean/median imputation, KNN imputer, dropping rows vs columns",
      "Categorical encoding: One-Hot Encoding vs Ordinal/Label Encoding vs Target Encoding",
      "Feature scaling: StandardScaler (Z-score) vs MinMaxScaler vs RobustScaler",
      "Data distribution transformations: Log transforms, Box-Cox, handling outliers"
    ],
    practiceTask: "Build an end-to-end scikit-learn ColumnTransformer pipeline that handles numeric scaling and categorical one-hot encoding on Titanic or Housing data.",
    miniBuild: "Create a reusable DataPreprocessingPipeline class that persists transformation parameters for test-time inference.",
    interviewPrep: [
      "Why must you fit scalers only on the training set and transform the test set?",
      "What is the curse of dimensionality, and how does one-hot encoding contribute to it?",
      "When is Median imputation strictly preferred over Mean imputation?"
    ],
    milestone: null
  },
  {
    day: 9,
    week: 2,
    topic: "Statistics basics + visualization + data interpretation",
    description: "Descriptive statistics, probability distributions, hypothesis testing, correlation vs causation, and EDA visualization.",
    learningChecklist: [
      "Descriptive stats: Mean, Median, Mode, Variance, Standard Deviation, IQR",
      "Distributions: Normal/Gaussian, Uniform, Skewness, Kurtosis, Central Limit Theorem",
      "Correlation metrics: Pearson vs Spearman rank correlation",
      "Exploratory Data Analysis (EDA) visualizations using Matplotlib/Seaborn: Histograms, Box plots, Heatmaps"
    ],
    practiceTask: "Perform an EDA notebook on a public dataset: plot distributions, detect skewness, generate correlation heatmaps, and highlight key insights.",
    miniBuild: "Write a statistical summary function that detects potential outliers using the 1.5 * IQR rule.",
    interviewPrep: [
      "Explain the Central Limit Theorem in plain English.",
      "What is the p-value in hypothesis testing, and what does p < 0.05 actually mean?",
      "What is the difference between Pearson and Spearman correlation?"
    ],
    milestone: null
  },
  {
    day: 10,
    week: 2,
    topic: "Supervised ML: regression and classification workflow",
    description: "The complete supervised learning workflow: Linear Regression, Logistic Regression, loss functions, gradient descent, and cross-validation.",
    learningChecklist: [
      "Linear Regression: Ordinary Least Squares (OLS), Mean Squared Error loss",
      "Logistic Regression: Sigmoid function, Log-Loss (Binary Cross-Entropy), decision thresholds",
      "Gradient Descent intuition: learning rate, convergence, batch vs stochastic vs mini-batch",
      "K-Fold Cross-Validation and stratified sampling"
    ],
    practiceTask: "Train and evaluate a Logistic Regression model on a binary classification dataset using scikit-learn with 5-fold cross-validation.",
    miniBuild: "Implement Simple Linear Regression with Batch Gradient Descent from scratch in 40 lines of Python.",
    interviewPrep: [
      "Derive or explain the Sigmoid function and why it is used in Logistic Regression.",
      "What is L1 (Lasso) vs L2 (Ridge) regularization, and which produces sparse weights?",
      "How do you choose an optimal decision threshold for an imbalanced classifier?"
    ],
    milestone: null
  },
  {
    day: 11,
    week: 2,
    topic: "Decision trees, SVM and KNN",
    description: "Non-linear algorithms: Decision Trees (CART, Gini/Entropy), Support Vector Machines (margins, kernels), and K-Nearest Neighbors.",
    learningChecklist: [
      "Decision Trees: Splitting criteria (Gini Impurity, Information Gain / Entropy), max_depth pruning",
      "Ensemble concepts introduction: Bagging vs Boosting preview",
      "Support Vector Machines: Maximum margin hyperplane, support vectors, RBF kernel trick",
      "K-Nearest Neighbors (KNN): Distance metrics (Euclidean, Manhattan), choosing optimal K"
    ],
    practiceTask: "Compare Decision Tree, SVM, and KNN on the Iris or Wine dataset: measure accuracy, training time, and plot decision boundaries.",
    miniBuild: "Visualize a trained Decision Tree decision path using scikit-learn export_text.",
    interviewPrep: [
      "How does a Decision Tree decide which feature and threshold to split on?",
      "What is the kernel trick in SVM, and why is it mathematically powerful?",
      "Why is feature scaling critical for KNN and SVM with RBF kernels?"
    ],
    milestone: null
  },
  {
    day: 12,
    week: 2,
    topic: "Unsupervised ML: clustering + dimensionality reduction",
    description: "Uncover hidden patterns in unlabeled data: K-Means clustering, hierarchical clustering, and Principal Component Analysis (PCA).",
    learningChecklist: [
      "K-Means clustering: centroid initialization (K-Means++), inertia, Elbow Method, Silhouette Score",
      "Hierarchical/Agglomerative clustering and dendrograms",
      "Dimensionality reduction: Principal Component Analysis (PCA), explained variance ratio",
      "t-SNE / UMAP conceptual awareness for high-dimensional visualization"
    ],
    practiceTask: "Apply K-Means clustering to customer segment data, evaluate with Silhouette analysis, and reduce dimensions to 2D with PCA for visualization.",
    miniBuild: "Write a function that calculates the optimal number of clusters K using the Elbow method.",
    interviewPrep: [
      "What are the major limitations of K-Means clustering?",
      "How does PCA determine principal components, and what does explained variance mean?",
      "What is the difference between PCA (linear) and t-SNE (non-linear) dimensionality reduction?"
    ],
    milestone: null
  },
  {
    day: 13,
    week: 2,
    topic: "Reinforcement learning concepts and where RL fits",
    description: "Understand RL fundamentals: Agent, Environment, States, Actions, Rewards, Policy, Value functions, and where RL powers GenAI (RLHF).",
    learningChecklist: [
      "Core RL framework: Markov Decision Processes (MDP), State, Action, Reward, Transition function",
      "Policy (pi) vs Value function (V/Q), Exploration vs Exploitation dilemma (epsilon-greedy)",
      "Q-Learning vs Deep Q Networks (DQN) overview",
      "Where RL fits in GenAI: Reinforcement Learning from Human Feedback (RLHF) and DPO preview"
    ],
    practiceTask: "Draw a diagram of the RL loop and map out how RLHF uses an environment, reward model, and policy to align LLMs.",
    miniBuild: "Implement a simple Multi-Armed Bandit simulation in Python with epsilon-greedy reward tracking.",
    interviewPrep: [
      "Explain the Exploration vs Exploitation dilemma with an intuitive example.",
      "What is a Markov Decision Process (MDP) and what is the Markov property?",
      "How is Reinforcement Learning applied in aligning LLMs (RLHF)?"
    ],
    milestone: null
  },
  {
    day: 14,
    week: 2,
    topic: "Revision + mini ML model + interview practice",
    description: "Consolidate Week 2 ML concepts, build an end-to-end trained model pipeline, and practice ML systems interview questions.",
    learningChecklist: [
      "Review classical ML: regression, classification, trees, SVM, clustering, PCA",
      "Train an end-to-end ML model with hyperparameter tuning (GridSearchCV/RandomizedSearchCV)",
      "Evaluate with confusion matrix, classification report, and ROC curve",
      "Milestone 2 check: solid intuition across the classical ML spectrum"
    ],
    practiceTask: "Build an end-to-end pipeline on California Housing or Breast Cancer dataset: preprocessing, cross-validated model tuning, and metrics export.",
    miniBuild: "Save and reload a trained scikit-learn model with joblib and run inference on unseen mock samples.",
    interviewPrep: [
      "Full review of all Day 8-13 interview questions",
      "How do you address severe class imbalance in a fraud detection dataset?",
      "Explain the difference between bagging (Random Forest) and boosting (XGBoost/LightGBM)."
    ],
    milestone: {
      id: "milestone-2",
      day: 14,
      title: "ML Foundation",
      description: "Practical mastery of classic machine learning workflows, algorithms, and data prep."
    }
  },

  // ==========================================
  // WEEK 3: DEEP LEARNING + NLP (Days 15-21)
  // ==========================================
  {
    day: 15,
    week: 3,
    topic: "Neural networks, layers, activations and training concepts",
    description: "Step into Deep Learning: Biological vs Artificial Perceptron, forward propagation, weights, biases, and activation functions.",
    learningChecklist: [
      "Perceptron math: dot product of inputs & weights plus bias, linear separability",
      "Multi-Layer Perceptrons (MLP): input, hidden, and output layer mechanics",
      "Activation functions: Sigmoid, Tanh, ReLU, Leaky ReLU, GELU, and Softmax",
      "Loss functions: Mean Squared Error (MSE), Binary Cross-Entropy, Categorical Cross-Entropy"
    ],
    practiceTask: "Implement a single artificial neuron with forward pass and ReLU activation from scratch in Python.",
    miniBuild: "Build a 2-layer forward propagation network using NumPy matrix multiplications and Softmax output.",
    interviewPrep: [
      "Why do we need non-linear activation functions in deep neural networks?",
      "What is the 'dying ReLU' problem and how does Leaky ReLU / GELU solve it?",
      "Why is Softmax preferred over Sigmoid for multi-class classification?"
    ],
    milestone: null
  },
  {
    day: 16,
    week: 3,
    topic: "Backpropagation/optimization awareness + practical DL workflow",
    description: "Understand the engine of deep learning: Computational graphs, the chain rule of calculus, gradient descent optimizers, and regularization.",
    learningChecklist: [
      "Backpropagation intuition: calculating loss gradients with respect to each weight via chain rule",
      "Optimizers: SGD, Momentum, RMSprop, Adam, AdamW (weight decay)",
      "Vanishing and Exploding gradients: causes and architectural mitigations",
      "Regularization in DL: Dropout, Batch Normalization, Layer Normalization"
    ],
    practiceTask: "Trace backprop manually for a tiny 2-node computational graph calculating partial derivatives step-by-step.",
    miniBuild: "Train a simple MLP in PyTorch or TensorFlow on MNIST / Fashion-MNIST for 5 epochs and observe loss convergence.",
    interviewPrep: [
      "Explain the vanishing gradient problem and how Residual connections or LayerNorm mitigate it.",
      "How does the Adam optimizer combine concepts from Momentum and RMSprop?",
      "Why is Layer Normalization favored over Batch Normalization in NLP and Transformer models?"
    ],
    milestone: null
  },
  {
    day: 17,
    week: 3,
    topic: "CNN concepts and use cases",
    description: "Computer vision foundations: Convolutional Neural Networks, filters/kernels, stride, padding, pooling, and hierarchical feature learning.",
    learningChecklist: [
      "Convolution operation: kernels/filters, feature maps, stride, and padding (valid vs same)",
      "Pooling layers: Max pooling vs Average pooling for spatial downsampling and translation invariance",
      "CNN architectures evolution: LeNet, AlexNet, VGG, ResNet (Residual blocks / skip connections)",
      "Transfer learning and fine-tuning pretrained vision backbones"
    ],
    practiceTask: "Compute a 3x3 convolution operation by hand on a 5x5 matrix with stride=1 and padding=0.",
    miniBuild: "Build a 3-layer CNN in PyTorch/Keras for image classification and inspect the output shape at each layer.",
    interviewPrep: [
      "Why are CNNs parameter-efficient compared to dense fully-connected layers for images?",
      "What problem do Skip Connections in ResNet solve?",
      "What is the difference between valid padding and same padding?"
    ],
    milestone: null
  },
  {
    day: 18,
    week: 3,
    topic: "RNN concepts and sequence modeling",
    description: "Sequential data processing: Recurrent Neural Networks (RNN), hidden state propagation, LSTMs, and GRUs.",
    learningChecklist: [
      "Sequence modeling basics: text, time-series, audio, one-to-many, many-to-one, many-to-many",
      "Vanilla RNN: recurrence relation h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)",
      "Long Short-Term Memory (LSTM): Forget gate, Input gate, Cell state, Output gate",
      "Gated Recurrent Unit (GRU): Reset gate and Update gate simplification"
    ],
    practiceTask: "Diagram the internal gates of an LSTM cell and explain how the Cell State acts as a conveyor belt for long-term memory.",
    miniBuild: "Train a simple character-level or word-level LSTM in PyTorch to predict the next word in a sentence.",
    interviewPrep: [
      "Why do vanilla RNNs struggle with long sequences (vanishing gradient through time)?",
      "How does the LSTM cell state prevent vanishing gradients?",
      "What is the computational bottleneck of RNNs that motivated Transformers?"
    ],
    milestone: null
  },
  {
    day: 19,
    week: 3,
    topic: "GAN and VAE awareness + generative modeling concepts",
    description: "Generative modeling foundations: Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), and Diffusion model intuition.",
    learningChecklist: [
      "Generative vs Discriminative loss objectives revisited",
      "Variational Autoencoders: Encoder, latent distribution (mean & variance), reparameterization trick, KL divergence",
      "Generative Adversarial Networks: Generator vs Discriminator minimax game",
      "Modern generative paradigm: overview of Denoising Diffusion Probabilistic Models (DDPM)"
    ],
    practiceTask: "Create an infographic or architectural table comparing GANs, VAEs, and Diffusion models on sample quality, training stability, and speed.",
    miniBuild: "Implement an Autoencoder in PyTorch that compresses 784-dim MNIST digits to an 8-dim latent bottleneck and reconstructs them.",
    interviewPrep: [
      "What is the reparameterization trick in VAEs and why is it necessary for backpropagation?",
      "Explain the minimax objective function of Generative Adversarial Networks.",
      "What is Mode Collapse in GANs?"
    ],
    milestone: null
  },
  {
    day: 20,
    week: 3,
    topic: "NLP preprocessing, tokenization and text representation",
    description: "Transforming text into numbers: Stopwords, stemming/lemmatization, Bag of Words, TF-IDF, Word2Vec, and subword tokenizers (BPE, WordPiece).",
    learningChecklist: [
      "Classical NLP text normalization: lowercasing, punctuation stripping, lemmatization vs stemming",
      "Sparse representations: Bag of Words (BoW) and Term Frequency - Inverse Document Frequency (TF-IDF)",
      "Dense distributed representations: Word2Vec (Skip-gram, CBOW), GloVe semantic properties",
      "Subword tokenization: Byte-Pair Encoding (BPE), WordPiece, SentencePiece (handling OOV tokens)"
    ],
    practiceTask: "Tokenize a sample paragraph using Hugging Face's AutoTokenizer (tiktoken or GPT-2/Llama) and inspect token IDs and decoded tokens.",
    miniBuild: "Implement a TF-IDF vectorizer from scratch in Python and calculate similarity between 3 short documents.",
    interviewPrep: [
      "What is the Out-Of-Vocabulary (OOV) problem, and how does Byte-Pair Encoding (BPE) solve it?",
      "How does TF-IDF score words, and what does the IDF component penalize?",
      "Why are dense word embeddings superior to one-hot encodings for capturing semantics?"
    ],
    milestone: null
  },
  {
    day: 21,
    week: 3,
    topic: "Transformers + review + small demo",
    description: "The seminal breakthrough: 'Attention Is All You Need', Scaled Dot-Product Attention, Multi-Head Attention, Positional Encoding, and Encoder-Decoder architecture.",
    learningChecklist: [
      "The intuition behind Self-Attention: Query (Q), Key (K), Value (V) matrices",
      "Scaled Dot-Product Attention formula: Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V",
      "Multi-Head Attention: why projecting into multiple subspaces improves representation",
      "Positional Encodings: sinusoidal vs learned vs rotary position embeddings (RoPE)"
    ],
    practiceTask: "Implement Scaled Dot-Product Attention in 15 lines of pure NumPy or PyTorch and verify the attention matrix shape.",
    miniBuild: "Run a pretrained Hugging Face pipeline (sentiment-analysis or text-classification) and inspect the model config.",
    interviewPrep: [
      "Full review of all Day 15-20 interview questions",
      "Why do we divide by sqrt(d_k) in Scaled Dot-Product Attention?",
      "What is the quadratic time and memory complexity of standard self-attention with respect to sequence length?"
    ],
    milestone: {
      id: "milestone-3",
      day: 21,
      title: "DL + NLP",
      description: "Deep learning intuition, sequence modeling, and Transformer architecture breakdown."
    }
  },

  // ==========================================
  // WEEK 4: LLM + PROMPT + HUGGING FACE (Days 22-28)
  // ==========================================
  {
    day: 22,
    week: 4,
    topic: "LLM tokens, context, inference and generation",
    description: "Demystify Large Language Models: Autoregressive decoding, token costs, context window limits, temperature, top-p, top-k, and repetition penalties.",
    learningChecklist: [
      "Autoregressive generation: next-token probability distribution and sampling algorithms",
      "Sampling hyperparameters: Temperature, Top-p (nucleus sampling), Top-k, Presence/Frequency penalties",
      "Context window mechanics: sliding context, KV caching overview, input vs output token billing",
      "Greedy decoding vs Beam search vs Stochastic sampling"
    ],
    practiceTask: "Experiment with temperature (0.0 vs 0.7 vs 1.4) and top_p on an LLM API to document determinism vs hallucination vs creativity.",
    miniBuild: "Write a script using tiktoken or transformers to measure exact token counts and estimate inference cost for a multi-page document.",
    interviewPrep: [
      "What is KV Cache in LLM inference, and why does it speed up autoregressive decoding?",
      "Explain the exact difference between Temperature and Top-p sampling.",
      "Why can't an LLM simply process infinite context without degradation (needle in a haystack problem)?"
    ],
    milestone: null
  },
  {
    day: 23,
    week: 4,
    topic: "GPT/LLaMA/Falcon-style model landscape and model selection",
    description: "Navigate the foundation model landscape: Proprietary (GPT-4o, Claude 3.5, Gemini 1.5) vs Open-Weights (Llama 3, Mistral, Gemma, Qwen) and trade-offs.",
    learningChecklist: [
      "Model architectures: Decoder-only (GPT/Llama) vs Encoder-only (BERT) vs Encoder-Decoder (T5)",
      "Open-Weights vs Proprietary API models: data privacy, latency, hosting costs, fine-tunability",
      "Model sizing: 3B vs 7B/8B vs 70B parameters - quantization (GGUF, AWQ, GPTQ) and hardware requirements",
      "Benchmarks and evaluation leaderboards: MMLU, GSM8K, Chatbot Arena (LMSYS Elo)"
    ],
    practiceTask: "Draft a Model Selection Decision Matrix comparing 3 models for an enterprise customer support bot requiring low latency and strict data sovereignty.",
    miniBuild: "Run a quantized 1B or 3B model locally using Ollama or llama.cpp and benchmark token generation speed (tokens/sec).",
    interviewPrep: [
      "Why did Decoder-only architectures win over Encoder-Decoder architectures for general LLMs?",
      "What is 4-bit weight quantization, and how does it reduce VRAM requirements?",
      "How would you choose between using GPT-4o via API versus self-hosting Llama 3 8B?"
    ],
    milestone: null
  },
  {
    day: 24,
    week: 4,
    topic: "Prompt engineering: instructions, roles, few-shot and constraints",
    description: "Systematic prompt design: Role definition, system vs user vs assistant messages, zero-shot vs few-shot prompting, Chain of Thought (CoT), and formatting constraints.",
    learningChecklist: [
      "Prompt anatomy: Role/Persona, Task instruction, Context, Constraints, Few-shot demonstrations, Output format",
      "Zero-shot vs Few-shot prompting: selecting diverse, representative positive and negative examples",
      "Reasoning patterns: Chain of Thought (CoT), Step-Back prompting, ReAct prompt format",
      "Prompt injection defense: delimiter tags (<context></context>), instructions priority"
    ],
    practiceTask: "Design and benchmark a robust prompt for classifying customer support emails into 5 categories with confidence scores and reasoning steps.",
    miniBuild: "Build a prompt template testing utility in Python that runs 10 test cases against 2 prompt variants and scores consistency.",
    interviewPrep: [
      "What is Chain-of-Thought (CoT) prompting and why does it dramatically improve multi-step arithmetic/logic accuracy?",
      "How do you protect system prompts against direct and indirect prompt injection attacks?",
      "What are the trade-offs of adding more few-shot examples to an LLM prompt?"
    ],
    milestone: null
  },
  {
    day: 25,
    week: 4,
    topic: "Structured output, schemas, validation and prompt testing",
    description: "Force LLMs to return reliable machine-readable data: JSON mode, Pydantic schemas, instructor, function/tool schema generation, and validation retries.",
    learningChecklist: [
      "Why raw LLM strings break downstream software systems",
      "JSON Mode vs Guided Decoding / Constrained Grammar Generation (e.g. Outlines)",
      "Pydantic schemas: defining strict models with types, default values, and field validators",
      "Handling validation errors: auto-repair loops and feedback prompt retries"
    ],
    practiceTask: "Define a Pydantic schema for an Invoice object (vendor, date, line_items, total, tax) and extract it from a raw unformatted email snippet.",
    miniBuild: "Build a robust LLMExtractor wrapper that validates LLM JSON output against Pydantic and automatically re-prompts on ValidationError.",
    interviewPrep: [
      "How does constrained decoding (like Outlines or OpenAI Structured Outputs) guarantee valid JSON at the logit level?",
      "What is the difference between Pydantic validation and prompt-based formatting requests?",
      "How would you design a retry mechanism when an LLM hallucinate invalid fields?"
    ],
    milestone: null
  },
  {
    day: 26,
    week: 4,
    topic: "LLM APIs, safety, retries, errors and basic cost awareness",
    description: "Production LLM API integration: Authentication, rate limiting (HTTP 429), exponential backoff with jitter, error handling, token cost monitoring, and guardrails.",
    learningChecklist: [
      "Standard client SDK patterns: OpenAI, Anthropic, Google GenAI SDKs",
      "Handling common failure modes: timeouts, RateLimitError, APIConnectionError, InternalServerError",
      "Exponential backoff and jitter algorithms for resilient distributed calls",
      "Token usage tracking, budget caps, and caching (prompt caching mechanisms)"
    ],
    practiceTask: "Write an API client wrapper that logs token usage, calculates cost in USD per query, and retries failed calls up to 3 times with exponential backoff.",
    miniBuild: "Create a simple token & cost budgeter class that blocks outgoing LLM requests if the cumulative daily spend exceeds $1.00.",
    interviewPrep: [
      "How do you implement exponential backoff with jitter, and why is jitter necessary?",
      "What is prompt caching, and how does it affect both latency and API cost?",
      "How do you handle API rate limits (TPM / RPM) in high-throughput production systems?"
    ],
    milestone: null
  },
  {
    day: 27,
    week: 4,
    topic: "Hugging Face: models, hub, inference and datasets",
    description: "Explore the Hugging Face open-source ecosystem: Hugging Face Hub, transformers library, pipelines, datasets, tokenizers, and model cards.",
    learningChecklist: [
      "Hugging Face Hub navigation: model cards, license checks, tags, spaces",
      "transformers library architecture: pipeline, AutoTokenizer, AutoModelForCausalLM",
      "datasets library: streaming large datasets, train/test splitting, mapping functions",
      "Running serverless inference endpoints or local pipeline inference"
    ],
    practiceTask: "Load a sentiment-analysis or text-summarization pipeline with a lightweight model and run batch inference on 20 movie reviews.",
    miniBuild: "Write a script that downloads a dataset from Hugging Face Hub, performs token length distribution analysis, and exports top samples.",
    interviewPrep: [
      "What is the role of AutoModel and AutoTokenizer in Hugging Face transformers?",
      "What is the difference between an open model and an open-weights model?",
      "How does dataset streaming in Hugging Face datasets prevent out-of-memory errors on massive text corpora?"
    ],
    milestone: null
  },
  {
    day: 28,
    week: 4,
    topic: "PROJECT 1: LLM Q&A + Summarizer",
    description: "Build and complete Major Capstone Project 1: An end-to-end LLM Q&A + Summarizer with structured output, prompt engineering, validation, and clean UI.",
    learningChecklist: [
      "Project 1 Architecture: LLM API integration, prompt templates, structured output schema, validation",
      "Feature 1: Multi-style summarizer (Executive TL;DR, bullet points, key takeaways, action items)",
      "Feature 2: Context-aware Q&A with confidence scoring and source excerpt attribution",
      "Feature 3: Input validation, token counting, error fallback, and clear feedback states",
      "Milestone 4 check: First standalone GenAI project completed and tested"
    ],
    practiceTask: "Build the complete backend engine or interactive UI for Project 1: LLM Q&A + Summarizer with strict Pydantic output validation.",
    miniBuild: "Package Project 1 with a clean CLI or web interface and test with 5 diverse long-form articles.",
    interviewPrep: [
      "Full walkthrough of Project 1: How did you design the prompts, handle validation, and mitigate hallucinations?",
      "What design decisions did you make to minimize latency and token costs in your summarizer?",
      "How would you evaluate the summary quality of your application in an automated test suite?"
    ],
    milestone: {
      id: "milestone-4",
      day: 28,
      title: "First GenAI Project",
      description: "Built & tested Project 1: LLM Q&A + Summarizer with structured schemas."
    }
  },

  // ==========================================
  // WEEK 5: EMBEDDINGS + RAG FOUNDATION (Days 29-35)
  // ==========================================
  {
    day: 29,
    week: 5,
    topic: "Embeddings: semantic representation and similarity",
    description: "Vector embeddings deep dive: How text maps to dense vector space, embedding model dimensions, Cosine similarity, Euclidean distance, and Dot product.",
    learningChecklist: [
      "What is an embedding: dense numeric vector representing semantic meaning",
      "Similarity metrics: Cosine Similarity, Dot Product, Euclidean (L2) Distance, Manhattan (L1) Distance",
      "Embedding models: text-embedding-3-small, BGE, E5, Sentence Transformers",
      "Embedding normalization: why unit vectors make dot product equivalent to cosine similarity"
    ],
    practiceTask: "Generate embeddings for 10 sentences (5 about tech, 5 about cooking) and compute a pairwise cosine similarity heatmap matrix.",
    miniBuild: "Build a semantic search function in Python that takes a user query and returns the top 3 most relevant sentences from a local text bank.",
    interviewPrep: [
      "Why is cosine similarity preferred over Euclidean distance for text embeddings?",
      "What is the geometric interpretation of a dot product between two normalized vectors?",
      "How do embedding models handle multilingual text and polysemy (words with multiple meanings)?"
    ],
    milestone: null
  },
  {
    day: 30,
    week: 5,
    topic: "FAISS/Chroma + vector indexing and similarity search",
    description: "Vector databases and indexing: Approximate Nearest Neighbors (ANN), HNSW, IVF-Flat, FAISS, and ChromaDB.",
    learningChecklist: [
      "Exact Nearest Neighbors (kNN) vs Approximate Nearest Neighbors (ANN) trade-offs",
      "Vector index types: Flat (exact), IVF (Inverted File Index), HNSW (Hierarchical Navigable Small World)",
      "FAISS library basics: IndexFlatL2, IndexFlatIP, IndexIVFFlat",
      "ChromaDB / Vector store CRUD: adding documents, embeddings, metadata filtering, querying"
    ],
    practiceTask: "Create a local ChromaDB collection or FAISS index, insert 50 chunked paragraphs with metadata, and query top-k with metadata filters.",
    miniBuild: "Benchmark search query latency between exact Flat index and IVF index on 10,000 synthetic 384-dimensional vectors.",
    interviewPrep: [
      "How does the HNSW graph index work, and why does it achieve sub-linear retrieval time?",
      "What is metadata filtering in vector databases, and what is the difference between pre-filtering and post-filtering?",
      "When would you use an in-memory vector index (FAISS) versus a distributed vector database (Pinecone/Milvus/Qdrant)?"
    ],
    milestone: null
  },
  {
    day: 31,
    week: 5,
    topic: "Document ingestion and parsing",
    description: "Extracting clean text from real-world documents: PDFs, DOCX, Markdown, HTML, tables, and handling messy layouts.",
    learningChecklist: [
      "Document ingestion pipeline: extraction, sanitization, structural preservation, metadata attachment",
      "Parsing tools: PyPDF / pypdf, pdfplumber, Unstructured, BeautifulSoup, python-docx",
      "Extracting tables and semi-structured data from PDFs without losing column relationships",
      "Attaching essential metadata: source filename, page number, section header, creation date"
    ],
    practiceTask: "Write a document ingestion script that loads a multi-page PDF, strips headers/footers, extracts text page-by-page, and tags page numbers in metadata.",
    miniBuild: "Build a robust web article parser using BeautifulSoup that extracts main body paragraphs while discarding navigation and ads.",
    interviewPrep: [
      "Why is PDF parsing one of the biggest bottlenecks in production RAG systems?",
      "How do you preserve tabular data when converting PDFs into text chunks for embeddings?",
      "What metadata attributes are most valuable to store alongside chunks in an enterprise RAG system?"
    ],
    milestone: null
  },
  {
    day: 32,
    week: 5,
    topic: "Chunking strategies + metadata",
    description: "Chunking text for optimal retrieval: Fixed-size, sliding window with overlap, recursive character chunking, semantic chunking, and document hierarchy.",
    learningChecklist: [
      "Why chunk: context window constraints, embedding dilution, retrieval specificity",
      "Fixed-character / token chunking vs Chunk overlap (preventing boundary cutoff)",
      "Recursive Character Chunking: splitting on paragraph (\\n\\n), newline (\\n), sentence, word",
      "Semantic chunking: splitting dynamically based on embedding distance shifts between sentences"
    ],
    practiceTask: "Implement Recursive Character Text Splitter logic and compare resulting chunks against fixed 500-token chunks on a technical documentation sample.",
    miniBuild: "Write a semantic chunker that splits text into sentences, calculates consecutive cosine similarity, and creates splits when similarity drops below threshold.",
    interviewPrep: [
      "What happens if your chunk size is too small? What happens if it is too large?",
      "Why is chunk overlap critical, and what is a reasonable overlap percentage (e.g. 10-20%)?",
      "Explain the trade-offs of Semantic Chunking versus Recursive Character Chunking."
    ],
    milestone: null
  },
  {
    day: 33,
    week: 5,
    topic: "Build basic RAG pipeline",
    description: "Assemble the complete classic RAG pipeline: Ingestion -> Chunking -> Embedding -> Vector DB -> Retrieval -> Augmented Prompt -> LLM Generation.",
    learningChecklist: [
      "RAG Architecture overview: Indexing stage vs Query/Generation stage",
      "Constructing the Augmented Context prompt: System instructions, Retrieved context chunks, User query",
      "Top-k selection and context window budget management",
      "End-to-end execution without heavy framework bloat (using clean Python or LangChain/LlamaIndex primitives)"
    ],
    practiceTask: "Build an end-to-end working RAG pipeline in Python that indexes a 10-page user manual and answers specific technical questions.",
    miniBuild: "Write a CLI tool that takes a PDF and a question, retrieves the 3 best chunks, and streams the grounded answer to the console.",
    interviewPrep: [
      "Walk through the complete lifecycle of a user query in a basic RAG system.",
      "What is the 'Lost in the Middle' phenomenon in LLM context windows?",
      "How do you ensure the LLM answers strictly based on the provided context rather than pretraining knowledge?"
    ],
    milestone: null
  },
  {
    day: 34,
    week: 5,
    topic: "Citations, fallback handling and answer grounding",
    description: "Make RAG trustworthy: Citation generation, source attribution, fallback logic when context lacks answers, and hallucination guardrails.",
    learningChecklist: [
      "Citation formats: inline markers [1], source filename, page number, and exact quote excerpt",
      "Prompt techniques for grounding: 'Answer strictly using only the provided context. If unsure, say I don't know'",
      "Fallback strategies: web search fallback, escalation to human agent, graceful failure messaging",
      "Detecting ungrounded claims: post-generation verification checks"
    ],
    practiceTask: "Modify your RAG prompt and post-processor to return answers formatted with inline numbered citations mapping to specific chunk sources.",
    miniBuild: "Build a GroundingGuard class that checks whether key entities/numbers in the generated answer appear in the source chunks.",
    interviewPrep: [
      "How do you implement verifiable citations in an enterprise RAG application?",
      "What prompt engineering techniques reduce hallucination when the retrieved chunks do not contain the answer?",
      "How would you detect whether an answer is grounded in the retrieved context?"
    ],
    milestone: null
  },
  {
    day: 35,
    week: 5,
    topic: "PROJECT 2: Document Intelligence RAG",
    description: "Build and complete Major Capstone Project 2: Document Intelligence RAG with multi-document upload, parsing, chunking, vector DB, retrieval, and citations.",
    learningChecklist: [
      "Project 2 Architecture: File upload, parsing engine, chunking with overlap, ChromaDB/FAISS store, grounded RAG generator",
      "Feature 1: Multi-document support (PDF, TXT, Markdown) with persistent vector indexing",
      "Feature 2: Strict citation mapping (File name, Page/Section, verified excerpt)",
      "Feature 3: Grounding validation and fallback messaging for out-of-scope questions",
      "Milestone 5 check: Second major portfolio project operational and validated"
    ],
    practiceTask: "Complete and verify Project 2: Document Intelligence RAG with a test suite of 10 complex domain documents and 20 evaluation queries.",
    miniBuild: "Add a citation drawer / preview UI where clicking an inline citation highlights the original source document chunk.",
    interviewPrep: [
      "Walk me through the architecture and design trade-offs of Project 2.",
      "How did you handle chunking and metadata preservation across multiple file formats?",
      "What are the primary failure points you encountered while building Document Intelligence RAG and how did you resolve them?"
    ],
    milestone: {
      id: "milestone-5",
      day: 35,
      title: "RAG Built",
      description: "Vector embeddings, vector DBs, and end-to-end Document Intelligence RAG completed."
    }
  },

  // ==========================================
  // WEEK 6: ADVANCED RAG + FINE-TUNING (Days 36-42)
  // ==========================================
  {
    day: 36,
    week: 6,
    topic: "Retrieval quality, Top-K and retrieval debugging",
    description: "Debug and optimize the retrieval stage: Precision vs Recall in retrieval, choosing Top-K, diagnosing poor context, and inspection tools.",
    learningChecklist: [
      "Retrieval evaluation metrics: Recall@K, Precision@K, Mean Reciprocal Rank (MRR), NDCG",
      "Diagnosing retrieval failure: Question-Chunk semantic mismatch, vocabulary mismatch, noisy chunks",
      "Tuning Top-K: latency vs cost vs noise vs answer completeness",
      "Building a retrieval inspection dashboard to inspect retrieved chunks before generation"
    ],
    practiceTask: "Create a retrieval diagnostic script that tests 15 questions and prints MRR and Recall@3 against a ground-truth chunk label set.",
    miniBuild: "Build a chunk scoring inspector that prints cosine similarity scores and highlight keywords for top retrieved candidates.",
    interviewPrep: [
      "What is Mean Reciprocal Rank (MRR) and how is it calculated?",
      "Why is higher Top-K not always better for generation quality?",
      "What is the difference between retrieval recall and generation accuracy?"
    ],
    milestone: null
  },
  {
    day: 37,
    week: 6,
    topic: "Hybrid search concepts",
    description: "Combine semantic vector search with keyword lexical search: BM25, sparse-dense embeddings, and Reciprocal Rank Fusion (RRF).",
    learningChecklist: [
      "Why dense semantic search fails: exact keyword matches, product SKUs, acronyms, code identifiers",
      "BM25 algorithm: term frequency, inverse document frequency, document length normalization",
      "Hybrid search architecture: parallel dense retrieval + sparse BM25 retrieval",
      "Reciprocal Rank Fusion (RRF) formula: RRF_score(d) = sum(1 / (k + rank_i(d)))"
    ],
    practiceTask: "Implement Reciprocal Rank Fusion (RRF) in Python to merge ranked lists from a BM25 retriever and a vector retriever.",
    miniBuild: "Build a HybridRetriever class that runs BM25 and ChromaDB queries in parallel and returns the top 5 fused results.",
    interviewPrep: [
      "Explain a scenario where BM25 outperforms vector embeddings.",
      "How does Reciprocal Rank Fusion (RRF) work and why does it not require score normalization?",
      "What are sparse embedding models (e.g. SPLADE) and how do they differ from BM25?"
    ],
    milestone: null
  },
  {
    day: 38,
    week: 6,
    topic: "Reranking and query transformation",
    description: "Two-stage retrieval and query rewriting: Cross-Encoder rerankers (Cohere, BGE-Reranker), Hypothetical Document Embeddings (HyDE), and sub-query decomposition.",
    learningChecklist: [
      "Two-stage retrieval: Stage 1 (Fast ANN retrieves Top 25-50) -> Stage 2 (Cross-Encoder reranks Top 5)",
      "Bi-Encoder vs Cross-Encoder: why Cross-Encoders are more accurate but computationally heavier",
      "Query transformation: Multi-Query generation, Step-Back prompting, Sub-question decomposition",
      "Hypothetical Document Embeddings (HyDE): generating a hypothetical answer to embed instead of the question"
    ],
    practiceTask: "Integrate a Cross-Encoder reranker (e.g. BGE-reranker or Cohere Rerank API) into your retrieval pipeline and measure ranking shifts.",
    miniBuild: "Implement HyDE (Hypothetical Document Embeddings) using an LLM to generate a draft answer before running vector similarity search.",
    interviewPrep: [
      "What is the architectural difference between a Bi-Encoder and a Cross-Encoder?",
      "Why is two-stage retrieval (Bi-Encoder + Cross-Encoder) considered standard in production RAG?",
      "How does HyDE improve retrieval for queries with little direct semantic overlap with documentation?"
    ],
    milestone: null
  },
  {
    day: 39,
    week: 6,
    topic: "RAG evaluation: relevance, groundedness and answer quality",
    description: "Automated RAG evaluation frameworks: The RAG Triad (Context Relevance, Groundedness / Faithfulness, Answer Relevance), Ragas, and TruLens.",
    learningChecklist: [
      "The RAG Triad: 1. Context Relevance (Retriever), 2. Faithfulness/Groundedness (Generator), 3. Answer Relevance (End-to-end)",
      "LLM-as-a-Judge: prompt templates for scoring metrics on 1-5 scales with reasoning",
      "Evaluation datasets: generating synthetic test sets (Question, Ground Truth, Context)",
      "Overview of Ragas and TruLens evaluation frameworks"
    ],
    practiceTask: "Build an LLM-as-a-judge evaluator script in Python that rates Faithfulness and Answer Relevance for 10 test query outputs.",
    miniBuild: "Create an automated test suite that runs after pipeline changes and fails if Faithfulness score drops below 0.85.",
    interviewPrep: [
      "Explain the RAG Triad metrics in detail.",
      "What are the risks and biases of using LLM-as-a-Judge for evaluation?",
      "How do you create a golden test dataset for evaluating an enterprise RAG system?"
    ],
    milestone: null
  },
  {
    day: 40,
    week: 6,
    topic: "RAG failure modes + improvement loop",
    description: "Systematic diagnosis of production RAG issues: 7 classic RAG failure modes, missing context, chunk truncation, hallucination, and continuous optimization.",
    learningChecklist: [
      "The 7 failure points in RAG: Missing content, Missed top chunks, Context limit exceeded, Not extracted, Wrong format, Incorrect specificity, Incomplete answer",
      "Observability & Tracing: tracking latency, tokens, retrieved chunks per query",
      "Active feedback loops: thumbs up/down user feedback collection and dataset curation",
      "Designing iterative improvement cycles for production RAG"
    ],
    practiceTask: "Analyze 5 simulated RAG failure cases, classify the exact failure point, and implement targeted fixes.",
    miniBuild: "Build a query feedback logging component that stores user query, retrieved chunk IDs, answer, and user thumbs up/down rating in SQLite/JSON.",
    interviewPrep: [
      "What are the most common failure modes in enterprise RAG and how do you mitigate each?",
      "How do you handle queries where the required information is split across multiple distant pages?",
      "How do you trace and debug a slow RAG query in production?"
    ],
    milestone: null
  },
  {
    day: 41,
    week: 6,
    topic: "Fine-tuning vs RAG + LoRA/PEFT concepts",
    description: "When to retrieve vs when to train: RAG vs Fine-Tuning trade-offs, Parameter-Efficient Fine-Tuning (PEFT), Low-Rank Adaptation (LoRA), and QLoRA.",
    learningChecklist: [
      "RAG vs Fine-Tuning decision matrix: Dynamic knowledge vs Domain style/format vs Cost",
      "Full fine-tuning vs Parameter-Efficient Fine-Tuning (PEFT)",
      "LoRA mechanics: freezing pretrained weights W and training low-rank decomposition matrices A and B (delta W = A * B)",
      "QLoRA: 4-bit NormalFloat (NF4), double quantization, and paged optimizers for consumer GPU training"
    ],
    practiceTask: "Draft an enterprise architecture recommendation: Should a medical clinic use RAG, Fine-Tuning, or both to answer clinical guidelines questions?",
    miniBuild: "Inspect a LoRA configuration in Hugging Face PEFT library (r=8, lora_alpha=16, target_modules=['q_proj', 'v_proj']) and calculate trainable parameters.",
    interviewPrep: [
      "How do you decide whether to use RAG, Fine-Tuning, or a combination of both for a business problem?",
      "Explain the mathematical intuition behind LoRA (Low-Rank Adaptation).",
      "What is QLoRA and how does it enable fine-tuning a 70B parameter model on a single GPU?"
    ],
    milestone: null
  },
  {
    day: 42,
    week: 6,
    topic: "PROJECT 3: Production-style RAG",
    description: "Build and complete Major Capstone Project 3: Production RAG with hybrid search (BM25 + Dense), cross-encoder reranking, query transformation, and Ragas evaluation.",
    learningChecklist: [
      "Project 3 Architecture: Hybrid search (Vector + BM25), Cross-encoder reranker, query rewriting, RAG Triad evaluation",
      "Feature 1: Hybrid retrieval pipeline with Reciprocal Rank Fusion",
      "Feature 2: Two-stage reranking achieving high Recall@K and Precision@K",
      "Feature 3: Automated evaluation report displaying Faithfulness, Answer Relevance, and Context Recall",
      "Milestone 6 check: Advanced production-grade RAG pipeline completed"
    ],
    practiceTask: "Complete and benchmark Project 3: Compare baseline RAG vs Advanced Hybrid + Reranked RAG across 25 tricky evaluation questions.",
    miniBuild: "Package Project 3 with an evaluation report dashboard showing before/after metrics on answer quality and retrieval accuracy.",
    interviewPrep: [
      "Walk me through Project 3: How does your hybrid retrieval + reranking architecture outperform basic RAG?",
      "What latency trade-offs did the reranker introduce and how did you optimize them?",
      "How do you evaluate and monitor your production RAG pipeline over time?"
    ],
    milestone: {
      id: "milestone-6",
      day: 42,
      title: "Advanced RAG",
      description: "Hybrid search, reranking, RAG evaluation frameworks, and fine-tuning trade-offs."
    }
  },

  // ==========================================
  // WEEK 7: AGENTS + BACKEND (Days 43-49)
  // ==========================================
  {
    day: 43,
    week: 7,
    topic: "LLM vs RAG vs Agent",
    description: "The evolutionary spectrum: Static LLM (internal memory) -> RAG (external memory retrieval) -> Autonomous Agent (perception, reasoning, tools, and action loops).",
    learningChecklist: [
      "Conceptual comparison: Prompting vs RAG vs Workflow vs Autonomous Agent",
      "The anatomy of an Agent: Brain (LLM), Planning (task decomposition), Memory (short/long term), Tools (APIs)",
      "When to use an Agent and when NOT to use an Agent (deterministic workflows vs open-ended exploration)",
      "ReAct framework intuition: Reasoning + Action loop (Thought, Action, Action Input, Observation)"
    ],
    practiceTask: "Diagram the step-by-step ReAct loop for an agent answering 'What is the stock price of Apple multiplied by Microsoft's current P/E ratio?'.",
    miniBuild: "Implement a minimal ReAct loop from scratch in Python using regex to parse Thought and Action commands from the LLM.",
    interviewPrep: [
      "What is the fundamental difference between a RAG pipeline and an AI Agent?",
      "When is an AI Agent the wrong architectural choice for a software system?",
      "Explain the ReAct (Reasoning + Acting) paradigm."
    ],
    milestone: null
  },
  {
    day: 44,
    week: 7,
    topic: "Tool/function calling",
    description: "Enabling LLMs to interact with the world: JSON Schema tool definitions, OpenAI/Anthropic tool calling syntax, executing functions, and returning tool results.",
    learningChecklist: [
      "Tool definition schema: name, description, parameters object, required fields",
      "The tool execution loop: 1. User prompt -> 2. LLM emits tool_calls -> 3. App executes code -> 4. App returns tool role message -> 5. LLM final response",
      "Parallel tool calling: executing multiple tool calls concurrently",
      "Writing clear tool descriptions so the LLM chooses the correct tool with accurate parameters"
    ],
    practiceTask: "Define two tools (get_weather and search_database) with strict JSON schemas and run a tool-calling session with an LLM API.",
    miniBuild: "Build a safe Python FunctionRegistry that validates function arguments against Pydantic schemas before executing local functions.",
    interviewPrep: [
      "How does the LLM actually 'call' a tool under the hood?",
      "Why are clear, unambiguous docstrings and parameter descriptions crucial in tool calling?",
      "How do you handle tools that return massive amounts of data without overflowing the LLM's context window?"
    ],
    milestone: null
  },
  {
    day: 45,
    week: 7,
    topic: "Memory and state",
    description: "Managing state in agentic interactions: Short-term conversational memory, sliding window buffers, summary memory, and persistent long-term memory.",
    learningChecklist: [
      "Types of memory: Short-term (in-context), Working memory (scratchpad), Long-term (vector DB / key-value store)",
      "Buffer memory vs Buffer Window memory vs Conversation Summary memory",
      "State machines: managing conversation state, user variables, and intermediate artifacts",
      "Entity memory: tracking user preferences and facts across multiple sessions"
    ],
    practiceTask: "Implement ConversationSummaryBufferMemory from scratch: keep last 4 messages verbatim and summarize older history with an LLM call.",
    miniBuild: "Create a persistent JSON/SQLite agent memory store that recalls user profile attributes across separate script executions.",
    interviewPrep: [
      "What are the different strategies for managing conversational memory in multi-turn LLM apps?",
      "How do you implement long-term episodic memory for an AI Agent?",
      "What are the challenges of using LLM summaries for conversational history?"
    ],
    milestone: null
  },
  {
    day: 46,
    week: 7,
    topic: "Multi-step workflows and planning",
    description: "Complex agent reasoning: Task decomposition, Plan-and-Solve prompting, self-reflection/critique loops, and graph-based workflows (LangGraph concepts).",
    learningChecklist: [
      "Task decomposition: breaking high-level user goals into structured sub-tasks",
      "Plan-and-Solve: generating a multi-step plan first, executing steps sequentially, updating the plan on failure",
      "Self-Reflection and Reflexion: agent evaluating its own output and adjusting course",
      "StateGraph concepts: Nodes (functions), Edges (transitions), Conditional routing, and cyclic execution"
    ],
    practiceTask: "Build a 2-step research workflow: Step 1 generates an outline of 3 subtopics; Step 2 gathers search data for each and synthesizes a final briefing.",
    miniBuild: "Build a mini Plan-and-Execute agent in Python that prints its task plan and checks off steps as they complete.",
    interviewPrep: [
      "What is the difference between single-step ReAct planning and Plan-and-Solve architectures?",
      "Why are directed cyclic graphs (like LangGraph) better than linear chains for complex agents?",
      "How do you prevent an autonomous agent from entering an infinite execution loop?"
    ],
    milestone: null
  },
  {
    day: 47,
    week: 7,
    topic: "Agent error handling, guardrails and evaluation",
    description: "Production agent reliability: Max recursion limits, tool execution error feedback, NeMo Guardrails / Llama Guard, and trajectory evaluation.",
    learningChecklist: [
      "Preventing runaway loops: setting strict max_iterations and timeout limits",
      "Error recovery: feeding tool exceptions back into the LLM context so it can self-correct arguments",
      "Input & Output Guardrails: blocking jailbreaks, PII leakage, harmful content, and off-topic queries",
      "Agent evaluation: trajectory evaluation (did it pick the right tools in the right order?) vs final answer evaluation"
    ],
    practiceTask: "Simulate a broken tool call (e.g. invalid date format), pass the error message back to the LLM, and verify that the LLM corrects its input on retry.",
    miniBuild: "Build an InputGuardrail filter that checks user inputs against regex for sensitive data (API keys, SSNs, credit cards) before sending to LLMs.",
    interviewPrep: [
      "How do you handle tool execution failures inside an agent loop?",
      "What are the primary security concerns when granting an agent tool execution capabilities (e.g. bash execution, SQL execution)?",
      "How do you evaluate whether an agent took the optimal trajectory to solve a task?"
    ],
    milestone: null
  },
  {
    day: 48,
    week: 7,
    topic: "FastAPI + REST + JSON; Flask awareness",
    description: "Backend engineering for AI services: FastAPI async endpoints, Pydantic request/response validation, SSE streaming (Server-Sent Events), and CORS.",
    learningChecklist: [
      "FastAPI fundamentals: ASGI, async/await, path/query parameters, dependency injection",
      "Pydantic schemas for API contract validation and auto-generated Swagger UI (/docs)",
      "Streaming LLM tokens to the client using Server-Sent Events (SSE) and StreamingResponse",
      "Production considerations: CORS middleware, environment variables, background tasks, Flask awareness"
    ],
    practiceTask: "Build a FastAPI application with a /query endpoint that accepts a question, runs an LLM, and streams tokens to the client using StreamingResponse.",
    miniBuild: "Create a complete FastAPI microservice with health checks, Pydantic schemas, and structured error responses.",
    interviewPrep: [
      "Why is async/await critical in FastAPI when handling I/O bound LLM API requests?",
      "How does Server-Sent Events (SSE) differ from WebSockets for streaming LLM responses?",
      "What is the difference between FastAPI (ASGI) and Flask (WSGI)?"
    ],
    milestone: null
  },
  {
    day: 49,
    week: 7,
    topic: "PROJECT 4: AI Research / Support Agent",
    description: "Build and complete Major Capstone Project 4: An autonomous AI Research & Support Agent with tool calling, memory, planning, error handling, and FastAPI backend.",
    learningChecklist: [
      "Project 4 Architecture: Autonomous Agent with tool calling (Search, Calculator, Database, Summarizer), memory, and FastAPI backend",
      "Feature 1: Multi-step reasoning loop with dynamic tool selection",
      "Feature 2: Conversational memory tracking user preferences and prior turns",
      "Feature 3: Guardrails, execution timeout caps, and graceful error self-correction",
      "Milestone 7 check: Autonomous agent capstone built, tested, and documented"
    ],
    practiceTask: "Complete and verify Project 4: Test the agent with multi-step research tasks that require combining search, calculation, and document synthesis.",
    miniBuild: "Package Project 4 with a FastAPI REST API and interactive Swagger documentation.",
    interviewPrep: [
      "Walk me through the architecture and state management of Project 4.",
      "How does your agent handle ambiguous user queries and tool failures?",
      "What guardrails and resource limits did you put in place to prevent infinite loops and runaway costs?"
    ],
    milestone: {
      id: "milestone-7",
      day: 49,
      title: "Agent Built",
      description: "Function calling, multi-step planning, agentic memory, and production API integration."
    }
  },

  // ==========================================
  // WEEK 8: APPLICATIONS + PRODUCTION + CAREER (Days 50-56)
  // ==========================================
  {
    day: 50,
    week: 8,
    topic: "GenAI application architecture patterns",
    description: "Enterprise system design patterns for GenAI: Gateway layer, semantic caching, routing between small/large models, fallback chains, and asynchronous queues.",
    learningChecklist: [
      "AI Gateway pattern: unified interface for routing, rate limiting, logging, and key management",
      "Semantic Caching (e.g. GPTCache): checking vector similarity against past queries to return cached answers instantly",
      "Model Router pattern: classifying query complexity and routing simple queries to 8B models and complex queries to frontier models",
      "Asynchronous job processing: handling long-running document indexing or agent tasks with Celery/Redis"
    ],
    practiceTask: "Design an architecture diagram for an enterprise AI assistant serving 50,000 daily users with semantic caching and model routing.",
    miniBuild: "Build a simple semantic cache in Python using ChromaDB that returns cached LLM answers if query similarity > 0.95.",
    interviewPrep: [
      "How does Semantic Caching work and what are the risks of a high similarity threshold?",
      "How would you design a Model Router to save 60% on API costs while preserving output quality?",
      "Explain the AI Gateway architectural pattern."
    ],
    milestone: null
  },
  {
    day: 51,
    week: 8,
    topic: "Stable Diffusion awareness + text-to-code awareness",
    description: "Broaden GenAI horizons: Text-to-Image diffusion models (UNet/DiT, latent space, CLIP text encoder) and Text-to-Code models (Copilot, StarCoder, code generation).",
    learningChecklist: [
      "Latent Diffusion Models: Text conditioning via CLIP, UNet noise predictor, Variational Autoencoder (VAE) decoder",
      "Text-to-Code models: pretraining on code repositories, fill-in-the-middle (FIM) training, code execution sandboxes",
      "Diffusion vs Autoregression: parallel pixel generation vs sequential token generation",
      "Awareness of multimodal foundation models (Vision-Language Models, Audio models)"
    ],
    practiceTask: "Draft a technical comparison between how a Transformer generates code tokens vs how Stable Diffusion generates image pixels.",
    miniBuild: "Write a prompt-to-SQL generation and execution verification script with SQLite schema introspection.",
    interviewPrep: [
      "What is the role of the CLIP text encoder in Stable Diffusion?",
      "How does Fill-In-the-Middle (FIM) training help models like Copilot perform code completion?",
      "Why is code evaluation (Pass@k, unit tests) fundamentally different from natural language evaluation?"
    ],
    milestone: null
  },
  {
    day: 52,
    week: 8,
    topic: "Streamlit/Gradio + frontend integration",
    description: "Rapid GenAI prototyping and full-stack integration: Streamlit chat interfaces (st.chat_message, st.chat_input), Gradio blocks, and modern React frontend APIs.",
    learningChecklist: [
      "Streamlit GenAI features: st.chat_input, st.chat_message, st.session_state, streaming tokens",
      "Gradio interface design: gr.ChatInterface, gr.Blocks, component events, sharing public demo links",
      "Connecting a modern React/Vite web frontend to a FastAPI LLM backend via REST and EventSource",
      "Optimizing frontend UX: loading skeletons, streaming cursor effect, stop generation button"
    ],
    practiceTask: "Build an interactive Streamlit or Gradio chat application connected to your Document Intelligence RAG pipeline.",
    miniBuild: "Create a sleek web chat interface with copy-to-clipboard, markdown code syntax highlighting, and token streaming.",
    interviewPrep: [
      "When is Streamlit/Gradio appropriate versus building a custom React frontend?",
      "How does Streamlit handle execution state across user interactions (session_state)?",
      "How do you implement a 'Stop Generating' button that cleanly cancels an in-flight LLM stream?"
    ],
    milestone: null
  },
  {
    day: 53,
    week: 8,
    topic: "Docker + cloud deployment fundamentals",
    description: "Containerization and cloud deployment: Multi-stage Dockerfiles, .dockerignore, container networking, deploying to AWS/GCP/Render/Hugging Face Spaces.",
    learningChecklist: [
      "Docker essentials: Images, Containers, Dockerfile commands (FROM, WORKDIR, COPY, RUN, CMD, EXPOSE)",
      "Multi-stage Docker builds to reduce image size for Python and node applications",
      "Managing environment secrets (.env, secrets managers) safely without baking keys into images",
      "Cloud deployment options: Container services (GCP Cloud Run, AWS App Runner), Render, Hugging Face Spaces"
    ],
    practiceTask: "Write a production-ready multi-stage Dockerfile for your FastAPI RAG backend that installs dependencies without root privileges.",
    miniBuild: "Build, run, and test your Docker container locally, ensuring health checks pass and environment variables are injected dynamically.",
    interviewPrep: [
      "Why should you never bake API keys or secrets directly into a Dockerfile image layer?",
      "Explain the benefits of multi-stage Docker builds for Python and web applications.",
      "What are the trade-offs of deploying LLM applications on Serverless (e.g. Cloud Run) vs dedicated VMs?"
    ],
    milestone: null
  },
  {
    day: 54,
    week: 8,
    topic: "CI/CD awareness + logging + monitoring",
    description: "MLOps and software delivery: GitHub Actions workflows, automated linting/testing, structured JSON logging, Prometheus/Grafana, and LLM telemetry (Langfuse, Arize).",
    learningChecklist: [
      "CI/CD pipelines: GitHub Actions triggers, automated test suites (pytest), linting (ruff, black)",
      "Structured logging in Python: logging request_id, user_id, prompt tokens, completion tokens, latency",
      "LLM observability tools: Langfuse, LangSmith, Arize Phoenix, OpenTelemetry traces",
      "Alerting: setting up alerts for spike in error rates, latency p95 > 3s, or token budget exhaustion"
    ],
    practiceTask: "Create a GitHub Actions workflow (.github/workflows/ci.yml) that installs dependencies, runs linter, and executes pytest test cases on push.",
    miniBuild: "Implement structured JSON logging middleware for FastAPI that logs total latency, token count, and status code for each query.",
    interviewPrep: [
      "What key telemetry metrics should you track on a production GenAI application dashboard?",
      "How does tracing work in LLM observability (spans, parent-child traces across retriever and LLM)?",
      "How do you design a CI/CD pipeline that tests both deterministic software code and non-deterministic LLM behavior?"
    ],
    milestone: null
  },
  {
    day: 55,
    week: 8,
    topic: "Security, responsible AI, cost and latency optimization",
    description: "Enterprise hardening: OWASP Top 10 for LLMs, prompt injection, data leakage, toxic content filtering, latency optimization (TTFT, spec decoding), and cost controls.",
    learningChecklist: [
      "OWASP Top 10 for LLMs: Prompt Injection, Insecure Output Handling, Training Data Poisoning, Model Denial of Service",
      "Responsible AI & Content safety: bias detection, hate speech filtering, privacy preservation, PII anonymization",
      "Latency metrics: Time to First Token (TTFT), Inter-Token Latency (ITL), speculative decoding, prompt caching",
      "Cost optimization: batching, prompt compression, smaller specialized models"
    ],
    practiceTask: "Run a security audit on your application: test for prompt injection, indirect prompt injection via PDF, and PII leakage.",
    miniBuild: "Build a PII anonymization preprocessor using regex that masks emails, phone numbers, and SSNs before sending queries to an external LLM.",
    interviewPrep: [
      "What is the difference between Direct and Indirect Prompt Injection? Give a real-world example of each.",
      "What is Time to First Token (TTFT) and what engineering techniques reduce it?",
      "How do you protect internal vector database documents against unauthorized tenant access (multi-tenancy security)?"
    ],
    milestone: null
  },
  {
    day: 56,
    week: 8,
    topic: "SQL + DSA basics + GenAI system design",
    description: "Core computer science and system design for interviews: SQL queries, fundamental Data Structures & Algorithms, and GenAI System Design interview framework.",
    learningChecklist: [
      "SQL essentials: JOINs (INNER, LEFT), GROUP BY, HAVING, Aggregate functions, Window functions (ROW_NUMBER)",
      "DSA revision: Hash maps, Two Pointers, Sliding Window, BFS/DFS, Binary Search fundamentals",
      "GenAI System Design framework: Requirements, Scale, High-Level Architecture, Deep Dives, Bottlenecks, Trade-offs",
      "Milestone 8 check: Production engineering and system design capabilities solidified"
    ],
    practiceTask: "Solve 3 SQL problems (Window functions, multi-table joins) and 2 DSA problems in Python.",
    miniBuild: "Write a complete System Design document for an Enterprise Enterprise Search & Copilot System (e.g. Glean or Notion AI).",
    interviewPrep: [
      "Full review of all Day 50-55 interview questions",
      "Design a real-time AI code completion engine like GitHub Copilot (latency, caching, context selection).",
      "What are SQL Window functions and how do they differ from GROUP BY?"
    ],
    milestone: {
      id: "milestone-8",
      day: 56,
      title: "Production Skills",
      description: "Application architecture, Docker, cloud deployment, telemetry, security & cost tuning."
    }
  },

  // ==========================================
  // FINAL 4 DAYS: CAPSTONE & CAREER (Days 57-60)
  // ==========================================
  {
    day: 57,
    week: 9,
    isFinal: true,
    topic: "Capstone hardening: bugs, UX, reliability, evaluation and deployment",
    description: "Harden all four major capstone projects: Fix edge-case bugs, polish user experience, test error states, run evaluation suites, and ensure live deployments work smoothly.",
    learningChecklist: [
      "Audit Project 1 (LLM Q&A + Summarizer): verify schema validation, edge cases, error messaging",
      "Audit Project 2 (Document Intelligence RAG): test complex PDFs, verify inline citations and empty context handling",
      "Audit Project 3 (Production RAG): check hybrid search weights, reranker latency, and Ragas scores",
      "Audit Project 4 (AI Research Agent): verify tool error recovery, recursion limits, and memory persistence"
    ],
    practiceTask: "Perform an end-to-end stress test across all 4 projects: log errors, fix the top 3 most critical usability bugs, and verify live URLs.",
    miniBuild: "Create a unified demo launcher script or portal linking to all 4 live projects.",
    interviewPrep: [
      "Be prepared to explain the technical architecture, challenges, and solutions for each of your 4 projects.",
      "What is the single most technically challenging bug you encountered across your 4 projects and how did you debug it?",
      "If you had another month to work on your capstones, what 3 architectural upgrades would you implement?"
    ],
    milestone: null
  },
  {
    day: 58,
    week: 9,
    isFinal: true,
    topic: "GitHub cleanup + README + architecture diagrams + portfolio + resume",
    description: "Transform your code into an exceptional hiring portfolio: Professional GitHub READMEs with architecture diagrams, video walkthroughs, resume tailoring, and LinkedIn presence.",
    learningChecklist: [
      "GitHub repo polish: badges, demo GIFs, architecture diagrams (Mermaid / Excalidraw), setup instructions, tech stack",
      "Resume tailoring: GenAI project bullet points using the Google XYZ formula ('Accomplished [X] as measured by [Y] by doing [Z]')",
      "Portfolio site update: adding live project links, GitHub links, and interactive demos",
      "LinkedIn & professional presence: sharing project highlights and key learnings"
    ],
    practiceTask: "Write a comprehensive README for Project 2 and Project 4 containing an architecture diagram, installation steps, and benchmark results.",
    miniBuild: "Create a 60-second video demo or high-quality animated GIF showcasing your Project 2 RAG citation capabilities.",
    interviewPrep: [
      "How would you pitch your 60-day GenAI journey in a 2-minute elevator pitch to a hiring manager?",
      "Walk me through your resume: highlight your strongest GenAI project and your specific technical contributions.",
      "Why should a company hire you as a GenAI engineer over an experienced generalist software engineer?"
    ],
    milestone: null
  },
  {
    day: 59,
    week: 9,
    isFinal: true,
    topic: "Full mock interview: Python, ML/DL/NLP, LLM, RAG, agents, backend and projects",
    description: "Simulate a grueling, comprehensive multi-round technical interview: Python coding, ML fundamentals, Transformer mechanics, RAG architecture, Agent design, and project defense.",
    learningChecklist: [
      "Round 1: Python programming & algorithmic problem solving",
      "Round 2: Machine Learning, Deep Learning, and Transformer mechanics",
      "Round 3: Advanced RAG, Embeddings, Vector DBs, and Fine-tuning trade-offs",
      "Round 4: AI Agents, Tool Calling, FastAPI backend, and GenAI System Design",
      "Round 5: In-depth deep dive into your 4 portfolio capstone projects"
    ],
    practiceTask: "Complete a 90-minute timed mock interview with a peer or AI interviewer covering technical questions from all 8 weeks without referencing notes.",
    miniBuild: "Compile your personal 'Cheat Sheet' of tricky interview questions with concise, bullet-proof explanations.",
    interviewPrep: [
      "Complete comprehensive review of all 58 days of interview questions",
      "Practice behavioral questions: Tell me about a time an AI system failed in production and how you handled it.",
      "How do you stay up-to-date with the blistering pace of GenAI research?"
    ],
    milestone: null
  },
  {
    day: 60,
    week: 9,
    isFinal: true,
    topic: "Final demo + interview revision + application checklist",
    description: "The culmination of 60 days of relentless learning: Final capstone demonstrations, interview confidence review, job application submission sprint, and graduation!",
    learningChecklist: [
      "Deliver final recorded or live demos of all 4 major GenAI projects",
      "Final review of core technical concepts and personal confidence calibration",
      "Job application sprint: Target companies, referral outreach, tailored cover notes",
      "Milestone 9 check: Officially certified GenAI Strong Fresher ready to build and excel in the industry!"
    ],
    practiceTask: "Submit tailored applications to 5 GenAI / Machine Learning Engineer roles featuring your live projects and GitHub portfolio.",
    miniBuild: "Export your complete 60-Day Progress Tracker backup JSON and celebrate completing 60 days of intensive GenAI engineering!",
    interviewPrep: [
      "You have completed all 60 days of the curriculum. You are now prepared to speak with depth, nuance, and hands-on authority.",
      "Remember: Anchor your answers in real code you wrote, actual tradeoffs you measured, and systems you built!",
      "Congratulations on becoming a GenAI Strong Fresher!"
    ],
    milestone: {
      id: "milestone-9",
      day: 60,
      title: "GenAI Strong Fresher",
      description: "All capstone projects hardened, portfolio polished, mock interview passed. Job ready!"
    }
  }
];
