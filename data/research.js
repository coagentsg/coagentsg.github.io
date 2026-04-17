export const researchAreas = [
    {
        id: "multi-agent",
        title: "Multi-Agent Training & Inference",
        icon: "🤖",
        image: "/research/multi-agent.png",
        shortDesc: "Planning, reflection, debate, and memory for intelligent agents",
        description:
            "We develop multi-agent systems that learn to plan, reflect, debate, and maintain structured memory for complex reasoning and dialogue tasks. Our work spans hierarchical policy planning for proactive dialogues, dual-process planning frameworks, multi-agent debate with tree-structured preference optimization, and experiential policy learning for goal-driven conversations.",
        keyPapers: [
            "Reusable Experiences: Latent Routing and Modular Composition in LLMs (ACL 2026)",
            "MeMAD: Structured Memory of Debates for Enhanced Multi-Agent Reasoning (COLM 2025)",
            "Simulation-Free Hierarchical Latent Policy Planning for Proactive Dialogues (AAAI 2025)",
            "Planning Like Human: A Dual-process Framework for Dialogue Planning (ACL 2024)",
        ],
        keywords: ["Multi-Agent Systems", "Dialogue Planning", "Reflection", "Debate", "Memory"],
    },
    {
        id: "alignment-evaluation",
        title: "Alignment & Evaluation",
        icon: "🛡️",
        image: "/research/alignment.png",
        shortDesc: "Improving safety, reliability, and faithfulness of AI systems",
        description:
            "We research methods to align language models with human values and rigorously evaluate their capabilities. Our work covers adaptive safety guardrails for LLMs, process-level reward shaping for reasoning evaluation, trustworthy emotional support systems, and benchmarking LLMs on complex financial reasoning and temporal understanding.",
        keyPapers: [
            "LS-Guard: Adaptive Safety Guardrails Tailored to Individual LLMs (ACL Findings 2026)",
            "Smarter Not Harder: Generative Process Evaluation with Ability-Adaptive Reward Shaping (ICLR 2026)",
            "Reinforce Trustworthiness in Multimodal Emotional Support System (AAAI 2026)",
            "XFinBench: Benchmarking LLMs in Complex Financial Problem Solving (ACL Findings 2025)",
        ],
        keywords: ["AI Safety", "Alignment", "Evaluation", "Reward Shaping", "Trustworthiness"],
    },
    {
        id: "multimodal",
        title: "Multimodal Reasoning & Generation",
        icon: "🎬",
        image: "/research/multimodal.png",
        shortDesc: "Understanding and generating across text, speech, vision, and audio",
        description:
            "We build systems that reason and generate across multiple modalities — text, speech, vision, and audio. Our research includes universal video agents, agentic video research benchmarks, chart-to-code generation, multimodal empathetic response generation, and audio-language alignment for captioning.",
        keyPapers: [
            "Aligned Multi-View Scripts for Universal Chart-to-Code Generation (ACL 2026)",
            "Video-BrowseComp: Benchmarking Agentic Video Research on Open Web (2025)",
            "UniVA: Universal Video Agent (2025)",
            "Towards Multimodal Empathetic Response Generation (The Web Conference 2025)",
        ],
        keywords: ["Multimodal LLM", "Video Understanding", "Vision-Language", "Audio", "Chart Understanding"],
    },
];
