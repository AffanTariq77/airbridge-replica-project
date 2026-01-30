export const FullStackIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="fullstack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <g>
      {/* Atom-like structure */}
      <circle cx="32" cy="32" r="6" fill="url(#fullstack-gradient)" />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#fullstack-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#fullstack-gradient)"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#fullstack-gradient)"
        strokeWidth="2"
        fill="none"
        transform="rotate(120 32 32)"
      />
    </g>
  </svg>
);

export const AIEngineeringIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Twisted DNA/Helix pattern */}
    <path
      d="M20 8 Q32 16 44 8 Q56 0 44 20 Q32 40 20 20 Q8 0 20 8"
      stroke="url(#ai-gradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M20 44 Q32 52 44 44 Q56 36 44 56 Q32 76 20 56 Q8 36 20 44"
      stroke="url(#ai-gradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const StaffAugmentationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="staff-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Circular refresh/sync icon */}
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="url(#staff-gradient)"
      strokeWidth="3"
      fill="none"
      strokeDasharray="40 20"
    />
    <circle cx="32" cy="12" r="4" fill="url(#staff-gradient)" />
    <circle cx="32" cy="52" r="4" fill="url(#staff-gradient)" />
  </svg>
);

export const StrategicConsultingIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="consulting-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* 3D Cone/Pyramid */}
    <path
      d="M32 8 L52 56 L32 48 L12 56 Z"
      fill="url(#consulting-gradient)"
      opacity="0.8"
    />
    <path d="M32 8 L32 48 L52 56 Z" fill="url(#consulting-gradient)" opacity="0.6" />
  </svg>
);

export const LLMIntegrationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="llm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <g>
      <circle cx="32" cy="32" r="6" fill="url(#llm-gradient)" />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#llm-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#llm-gradient)"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="10"
        stroke="url(#llm-gradient)"
        strokeWidth="2"
        fill="none"
        transform="rotate(120 32 32)"
      />
    </g>
  </svg>
);

export const GuardrailsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="guardrails-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path
      d="M20 8 Q32 16 44 8 Q56 0 44 20 Q32 40 20 20 Q8 0 20 8"
      stroke="url(#guardrails-gradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M20 44 Q32 52 44 44 Q56 36 44 56 Q32 76 20 56 Q8 36 20 44"
      stroke="url(#guardrails-gradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const AutomationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="automation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="url(#automation-gradient)"
      strokeWidth="3"
      fill="none"
      strokeDasharray="40 20"
    />
    <circle cx="32" cy="12" r="4" fill="url(#automation-gradient)" />
    <circle cx="32" cy="52" r="4" fill="url(#automation-gradient)" />
  </svg>
);

export const FoundationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
    <defs>
      <linearGradient id="foundation-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path
      d="M32 8 L52 56 L32 48 L12 56 Z"
      fill="url(#foundation-gradient)"
      opacity="0.8"
    />
    <path
      d="M32 8 L32 48 L52 56 Z"
      fill="url(#foundation-gradient)"
      opacity="0.6"
    />
  </svg>
);
