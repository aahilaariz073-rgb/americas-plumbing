/* @ds-bundle: {"format":3,"namespace":"ScolloPaintingDesignSystem_9ecefb","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BeforeAfter","sourcePath":"components/core/BeforeAfter.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PhoneLink","sourcePath":"components/core/PhoneLink.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"TrustItem","sourcePath":"components/core/TrustItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"76a14cbac57c","components/core/BeforeAfter.jsx":"212eb9993b2f","components/core/Button.jsx":"51a1d80e9447","components/core/Card.jsx":"9dd9bf9e2238","components/core/Input.jsx":"5554ca0bbf54","components/core/PhoneLink.jsx":"e993b2e4918a","components/core/SectionHeading.jsx":"e9a1aa2364e4","components/core/Select.jsx":"975998b7ec41","components/core/ServiceCard.jsx":"6b86f4ce8853","components/core/Textarea.jsx":"c14a7be06029","components/core/TrustItem.jsx":"fac3b7584597","ui_kits/website/home.jsx":"fcfb2f6ad56c","ui_kits/website/icons.jsx":"15720875ec57","ui_kits/website/quote.jsx":"a60d103a1e1a","ui_kits/website/site.jsx":"7dd573600fe4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ScolloPaintingDesignSystem_9ecefb = window.ScolloPaintingDesignSystem_9ecefb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** Small label / pill. Tones: accent (amber), navy, neutral, success. */
function Badge({
  children,
  tone = "accent",
  icon
}) {
  const tones = {
    accent: {
      background: "var(--amber-50)",
      color: "var(--amber-700)",
      border: "1px solid var(--amber-100)"
    },
    navy: {
      background: "var(--navy-900)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--navy-900)"
    },
    neutral: {
      background: "var(--cloud)",
      color: "var(--stone-600)",
      border: "1px solid var(--border-subtle)"
    },
    success: {
      background: "#e7f1eb",
      color: "var(--success)",
      border: "1px solid #cfe5d8"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-ui)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone]
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BeforeAfter.jsx
try { (() => {
/**
 * Before/After comparison slider. Pass before/after as image src strings, or
 * leave empty to render labeled placeholder blocks for the client to fill.
 */
function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after painting comparison",
  height = 420
}) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);
  const move = clientX => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  React.useEffect(() => {
    const up = () => dragging.current = false;
    const mv = e => dragging.current && move(e.touches ? e.touches[0].clientX : e.clientX);
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", mv);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", mv);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);
  const Panel = ({
    src,
    label,
    side
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: side === "before" ? "repeating-linear-gradient(135deg,#8c8378,#8c8378 14px,#827a6f 14px,#827a6f 28px)" : "repeating-linear-gradient(135deg,#3a5170,#3a5170 14px,#34496685 14px,#344966 28px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "rgba(255,255,255,0.85)",
      letterSpacing: "0.05em",
      padding: "0 16px",
      textAlign: "center"
    }
  }, "[ ", side === "before" ? "Worn / faded surface" : "Freshly painted finish", " \u2014 drop client photo ]")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      [side === "before" ? "left" : "right"]: 14,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#fff",
      background: "rgba(15,32,52,0.72)",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)"
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      userSelect: "none",
      boxShadow: "var(--shadow-md)",
      cursor: "ew-resize"
    },
    onMouseDown: e => {
      dragging.current = true;
      move(e.clientX);
    },
    onTouchStart: e => {
      dragging.current = true;
      move(e.touches[0].clientX);
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    src: after,
    label: afterLabel,
    side: "after"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    src: before,
    label: beforeLabel,
    side: "before"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: "var(--amber-500)",
      transform: "translateX(-1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--amber-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 6 15 12 9 18",
    transform: "translate(0)"
  })))));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Scollo primary action button. Renders an <a> when `href` is set, else a <button>.
 * Variants: primary (amber), secondary (navy outline), ghost (text), inverse (on navy).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: "14px",
      gap: "7px"
    },
    md: {
      padding: "13px 24px",
      fontSize: "15px",
      gap: "9px"
    },
    lg: {
      padding: "17px 34px",
      fontSize: "17px",
      gap: "10px"
    }
  };
  const palettes = {
    primary: {
      background: "var(--amber-500)",
      color: "var(--navy-950)",
      border: "1px solid var(--amber-500)"
    },
    secondary: {
      background: "transparent",
      color: "var(--navy-900)",
      border: "1.5px solid var(--navy-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-900)",
      border: "1.5px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--navy-900)",
      border: "1px solid var(--white)"
    }
  };
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-ui)",
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
    padding: sizes[size].padding,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    ...palettes[variant]
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "primary" ? {
    background: "var(--amber-600)",
    borderColor: "var(--amber-600)",
    transform: "translateY(-1px)",
    boxShadow: "var(--shadow-accent)"
  } : variant === "secondary" ? {
    background: "var(--navy-900)",
    color: "var(--white)"
  } : variant === "ghost" ? {
    background: "var(--amber-50)",
    borderColor: "var(--amber-100)"
  } : {
    background: "var(--paper)"
  } : null;
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onMouseDown: e => e.currentTarget.style.transform = "translateY(0)",
    style: {
      ...base,
      ...hoverStyle
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. variant: default (white, hairline border, soft shadow that
 * lifts on hover), flat (no shadow), navy (inverse band card).
 */
function Card({
  children,
  variant = "default",
  padding = "var(--space-6)",
  hover = false,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    flat: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none"
    },
    panel: {
      background: "var(--surface-panel)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none"
    },
    navy: {
      background: "var(--surface-inverse-2)",
      border: "1px solid var(--border-on-dark)",
      boxShadow: "none",
      color: "var(--text-on-dark)"
    }
  };
  const [h, setH] = React.useState(false);
  const lift = hover && h ? {
    boxShadow: "var(--shadow-md)",
    borderColor: "var(--border-default)",
    transform: "translateY(-3px)"
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...variants[variant],
      ...lift,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldShell = {
  width: "100%",
  fontFamily: "var(--font-ui)",
  fontSize: "15px",
  color: "var(--text-strong)",
  background: "var(--surface-card)",
  border: "1.5px solid var(--border-default)",
  borderRadius: "var(--radius-sm)",
  padding: "12px 14px",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
};
function Label({
  label,
  required,
  htmlFor
}) {
  if (!label) return null;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "block",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--text-strong)",
      marginBottom: 7
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amber-600)"
    }
  }, " *"));
}

/** Labelled text input. */
function Input({
  label,
  required,
  id,
  error,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    label: label,
    required: required,
    htmlFor: id
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...fieldShell,
      borderColor: error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)",
      boxShadow: f ? "0 0 0 3px var(--ring)" : "none"
    }
  }, rest)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12.5,
      color: "var(--danger)",
      marginTop: 6
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/PhoneLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DIGITS = "5613061813";
const DISPLAY = "561-306-1813";

/**
 * Click-to-call phone link. Always renders the canonical NAP phone number
 * and a tel: href. `tone` adapts color for light vs navy backgrounds.
 */
function PhoneLink({
  tone = "dark",
  showIcon = true,
  weight = 600,
  children,
  ...rest
}) {
  const color = tone === "light" ? "var(--text-on-dark)" : "var(--navy-900)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: `tel:+1${DIGITS}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-ui)",
      fontWeight: weight,
      fontSize: "inherit",
      color,
      textDecoration: "none",
      letterSpacing: "0.01em"
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--amber-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  })), children || DISPLAY);
}
Object.assign(__ds_scope, { PhoneLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhoneLink.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Editorial section heading block: optional gold rule, uppercase eyebrow,
 * serif headline (with optional italic accent), and a lead paragraph.
 */
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  tone = "dark",
  rule = true,
  as = "h2",
  maxWidth = "640px"
}) {
  const Title = as;
  const isLight = tone === "light";
  const titleColor = isLight ? "var(--text-on-dark)" : "var(--text-strong)";
  const leadColor = isLight ? "var(--text-on-dark-muted)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? maxWidth : "none",
      marginInline: align === "center" ? "auto" : 0
    }
  }, rule && /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 48,
      height: 3,
      background: "var(--brand-accent)",
      border: 0,
      borderRadius: 999,
      margin: align === "center" ? "0 auto 18px" : "0 0 18px"
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Title, {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "clamp(2rem, 4vw, 2.75rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: titleColor,
      margin: 0
    }
  }, title, accent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontWeight: 400,
      color: "var(--text-accent)"
    }
  }, " ", accent)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.6,
      color: leadColor,
      margin: "18px 0 0",
      maxWidth
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled select dropdown. Pass options as [{value,label}] or strings. */
function Select({
  label,
  required,
  id,
  options = [],
  placeholder,
  error,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--text-strong)",
      marginBottom: 7
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amber-600)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    defaultValue: "",
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      appearance: "none",
      border: `1.5px solid ${error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "12px 40px 12px 14px",
      outline: "none",
      boxShadow: f ? "0 0 0 3px var(--ring)" : "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--stone-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 13,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
/**
 * Service offering card — icon, title, description, and a "Learn more" link.
 * Used in the services grid. Lifts on hover; arrow nudges right.
 */
function ServiceCard({
  icon,
  title,
  description,
  href = "#",
  linkLabel = "Learn more"
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "block",
      textDecoration: "none",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)",
      borderColor: h ? "var(--border-default)" : "var(--border-subtle)",
      transform: h ? "translateY(-3px)" : "none",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--amber-50)",
      border: "1px solid var(--amber-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--amber-600)",
      marginBottom: "var(--space-5)"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--fs-h3)",
      fontWeight: 600,
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: "0 0 18px"
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--amber-600)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: h ? "translateX(4px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled multi-line textarea. */
function Textarea({
  label,
  required,
  id,
  rows = 4,
  error,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--text-strong)",
      marginBottom: 7
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amber-600)"
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none",
      resize: "vertical",
      boxShadow: f ? "0 0 0 3px var(--ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/core/TrustItem.jsx
try { (() => {
/**
 * Trust / "why choose us" item — amber check (or custom icon), title, copy.
 * Horizontal layout by default; works on light or navy backgrounds.
 */
function TrustItem({
  icon,
  title,
  children,
  tone = "dark"
}) {
  const isLight = tone === "light";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: 38,
      height: 38,
      borderRadius: "var(--radius-sm)",
      background: isLight ? "rgba(193,138,61,0.18)" : "var(--amber-50)",
      border: `1px solid ${isLight ? "rgba(193,138,61,0.3)" : "var(--amber-100)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--amber-500)"
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 16,
      color: isLight ? "var(--text-on-dark)" : "var(--text-strong)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: isLight ? "var(--text-on-dark-muted)" : "var(--text-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TrustItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
// Home page sections for the Scollo Painting website UI kit.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const {
    Button,
    PhoneLink,
    Badge,
    SectionHeading,
    ServiceCard,
    TrustItem,
    BeforeAfter,
    Card
  } = DS;
  const Icon = window.Icon;
  const SERVICES = [{
    icon: "paint-roller",
    title: "Interior Painting",
    desc: "Walls, ceilings, trim, doors and cabinets — careful prep, furniture protection, clean lines, and full post-job cleanup."
  }, {
    icon: "home",
    title: "Exterior Painting",
    desc: "Transform your curb appeal — siding, stucco, trim and doors with Florida-climate-appropriate prep and durable finishes."
  }, {
    icon: "building-2",
    title: "Commercial Painting",
    desc: "Retail, industrial and institutional projects, small to large — scheduled flexibly around your business operations."
  }, {
    icon: "wrench",
    title: "Plaster & Drywall Repair",
    desc: "We fix the root cause, not just the symptom — patching, skim coating and texture matching for a durable next coat."
  }];
  const WHY = [{
    icon: "award",
    title: "Industry experts",
    body: "Over 45 years of hands-on craftsmanship across thousands of homes and businesses."
  }, {
    icon: "timer",
    title: "Quick turnaround",
    body: "On schedule and out of your way — we respect your time and your property."
  }, {
    icon: "receipt-text",
    title: "Cost transparency",
    body: "Fixed pricing quoted up front. No hidden costs, no surprises on the final invoice."
  }, {
    icon: "heart-handshake",
    title: "Customer service",
    body: "One company, one point of contact — the full package under a single roof."
  }];

  // Resolve a bundled resource (standalone build) or fall back to a live URL.
  function res(id, fallback) {
    return typeof window !== "undefined" && window.__resources && window.__resources[id] || fallback;
  }
  const IMG = {
    interior: () => res("imgInterior", "https://images.unsplash.com/photo-1759238136854-a43787126db7?fm=jpg&q=70&w=1400&auto=format&fit=crop"),
    crew: () => res("imgCrew", "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?fm=jpg&q=70&w=1400&auto=format&fit=crop")
  };
  window.IMG = IMG;
  function Placeholder({
    label,
    ratio = "16/10",
    tone = "warm",
    radius = "var(--radius-lg)",
    src,
    alt,
    children
  }) {
    const bg = tone === "navy" ? "repeating-linear-gradient(135deg,#26405f,#26405f 16px,#22395420 16px,#223954 32px)" : "repeating-linear-gradient(135deg,#cdbfa8,#cdbfa8 16px,#c3b59d 16px,#c3b59d 32px)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: "hidden",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt || label,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 12.5,
        color: tone === "navy" ? "rgba(255,255,255,0.78)" : "var(--stone-600)",
        letterSpacing: "0.04em",
        textAlign: "center",
        padding: "0 18px"
      }
    }, label), children);
  }
  window.Placeholder = Placeholder;
  function Hero({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--gutter) var(--space-9)",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 56,
        alignItems: "center"
      },
      className: "hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Over 45 years in business"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        color: "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14,
      color: "var(--amber-600)"
    }), " Stuart, FL")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2.6rem,5vw,4.25rem)",
        fontWeight: 600,
        lineHeight: 1.04,
        letterSpacing: "-0.025em",
        color: "var(--text-strong)",
        margin: "0 0 20px"
      }
    }, "A finish your home ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        fontWeight: 400,
        color: "var(--amber-600)"
      }
    }, "deserves.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: "0 0 30px",
        maxWidth: 520
      }
    }, "For over 45 years, families and businesses across the Treasure Coast have trusted our crew for clean lines, durable finishes, and pricing quoted up front \u2014 with no surprises."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNavigate("quote")
    }, "Get a Free Quote"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      href: "tel:+15613061813",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 18
      })
    }, "561-306-1813")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 26,
        marginTop: 34,
        flexWrap: "wrap"
      }
    }, [["shield-check", "Licensed & fully insured"], ["star", "45+ years experience"], ["map", "20 cities served"]].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-ui)",
        fontSize: 13.5,
        fontWeight: 600,
        color: "var(--stone-600)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--amber-600)"
    }), " ", t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Placeholder, {
      src: IMG.interior(),
      alt: "Freshly painted, light-filled modern living room by Scollo Painting Inc. in Stuart, FL",
      ratio: "4/5"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 22,
        left: -26,
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        border: "1px solid var(--border-subtle)",
        width: 268
      },
      className: "hero-card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 2,
        color: "var(--amber-500)",
        flex: "0 0 auto"
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 15,
      color: "var(--amber-500)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, "Trusted by homeowners"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, "[ Pull live review count ]"))))));
  }
  function ServicesGrid({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--space-9) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "What we do",
      title: "Painting services,",
      accent: "done right.",
      align: "center",
      maxWidth: "600px",
      lead: "Residential and commercial painting and repair \u2014 one company, one point of contact, the full package under a single roof."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 22,
        marginTop: 48
      },
      className: "services-grid"
    }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
      key: s.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: s.icon,
        size: 26
      }),
      title: s.title,
      description: s.desc,
      onClick: () => onNavigate("services"),
      href: "#"
    })))));
  }
  function WhyUs() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--navy-900)",
        padding: "var(--space-9) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: 64,
        alignItems: "center"
      },
      className: "why-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      tone: "light",
      eyebrow: "Why homeowners choose us",
      title: "Professionalism, expertise,",
      accent: "and genuine care.",
      lead: "Quality work at fair, transparent prices \u2014 delivered with the kind of care we'd want for our own homes."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      href: "#"
    }, "About our family business"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 28
      },
      className: "why-items"
    }, WHY.map(w => /*#__PURE__*/React.createElement(TrustItem, {
      key: w.title,
      tone: "light",
      title: w.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: w.icon,
        size: 18
      })
    }, w.body)))));
  }
  function GallerySection() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--space-9) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "See the difference",
      title: "Before &",
      accent: "after.",
      lead: "Drag to reveal the transformation. Real projects across Palm Beach, Martin and Broward Counties."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(BeforeAfter, {
      height: 460,
      before: IMG.crew(),
      after: IMG.interior(),
      beforeLabel: "Mid-project",
      afterLabel: "Finished",
      alt: "Interior repaint in progress and finished by Scollo Painting Inc."
    }))));
  }
  function AreasSection({
    onNavigate
  }) {
    const cities = window.CITIES || [];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-panel)",
        padding: "var(--space-9) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Areas serviced",
      title: "Painters across the",
      accent: "Treasure Coast.",
      align: "center",
      maxWidth: "620px",
      lead: "Proudly serving 20 communities throughout Palm Beach, Martin and Broward Counties \u2014 from Stuart to Fort Lauderdale."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        justifyContent: "center",
        marginTop: 40,
        maxWidth: 880,
        marginInline: "auto"
      }
    }, cities.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("areas");
      },
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--navy-800)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        padding: "8px 16px",
        textDecoration: "none"
      }
    }, c)))));
  }
  Object.assign(window, {
    Hero,
    ServicesGrid,
    WhyUs,
    GallerySection,
    AreasSection,
    SERVICES,
    WHY
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Lucide icon helper for the Scollo website UI kit.
// Renders a Lucide line icon at a given em-size; color via currentColor.
function Icon({
  name,
  size = 20,
  color,
  strokeWidth = 1.9,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide.createIcons({
        attrs: {
          "stroke-width": strokeWidth
        },
        nameAttr: "data-lucide",
        root: ref.current
      });
    }
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size,
      color: color || "inherit",
      lineHeight: 0,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/quote.jsx
try { (() => {
// Quote + Services screens for the Scollo Painting website UI kit.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const {
    Button,
    PhoneLink,
    Badge,
    SectionHeading,
    ServiceCard,
    Input,
    Select,
    Textarea,
    Card
  } = DS;
  const Icon = window.Icon;
  const Placeholder = window.Placeholder;
  function Breadcrumb({
    items,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        color: "var(--text-muted)",
        marginBottom: 22
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--stone-400)"
    }), it.route ? /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(it.route);
      },
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-strong)",
        fontWeight: 600
      }
    }, it.label))));
  }
  window.Breadcrumb = Breadcrumb;
  function QuoteScreen({
    onNavigate
  }) {
    const [sent, setSent] = React.useState(false);
    const cities = window.CITIES || [];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--space-7) 0 var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        route: "home"
      }, {
        label: "Get a Free Quote"
      }],
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 0.7fr",
        gap: 48,
        alignItems: "start"
      },
      className: "quote-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
      as: "h1",
      eyebrow: "Get a free quote",
      title: "Tell us about",
      accent: "your project.",
      lead: "Fill out the form and our team will follow up with a fixed, transparent quote \u2014 usually within one business day."
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "default",
      padding: "var(--space-7)",
      style: {
        marginTop: 30
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "30px 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--amber-50)",
        border: "1px solid var(--amber-100)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--amber-600)",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: 26,
        margin: "0 0 10px",
        color: "var(--text-strong)"
      }
    }, "Thanks \u2014 we'll be in touch."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 22px",
        color: "var(--text-body)"
      }
    }, "Your request is in. Expect a call from our team at 561-306-1813 shortly."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Submit another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      },
      className: "form-grid"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      required: true,
      placeholder: "Jane Smith",
      id: "q-name"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      required: true,
      placeholder: "561-000-0000",
      id: "q-phone"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@email.com",
      id: "q-email"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "City",
      placeholder: "Select your city\u2026",
      options: ["Stuart", ...cities],
      id: "q-city"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Service type",
      required: true,
      placeholder: "Choose a service\u2026",
      id: "q-service",
      options: ["Interior Painting", "Exterior Painting", "Commercial Painting", "Plaster & Drywall Repair"]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      label: "Project details",
      rows: 4,
      placeholder: "Tell us about your project \u2014 rooms, square footage, timeline\u2026",
      id: "q-details"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: "flex",
        gap: 14,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      type: "submit"
    }, "Request my free quote"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "No obligation \xB7 Fixed pricing up front"))))), /*#__PURE__*/React.createElement("aside", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "navy",
      padding: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: 22,
        color: "var(--text-on-dark)",
        margin: "0 0 16px"
      }
    }, "Prefer to call?"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, /*#__PURE__*/React.createElement(PhoneLink, {
      tone: "light"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-on-dark)",
        margin: "20px 0"
      }
    }), /*#__PURE__*/React.createElement(Row, {
      icon: "map-pin",
      tone: "light"
    }, "848 S.E. Fleming Way, Stuart, FL 34997"), /*#__PURE__*/React.createElement(Row, {
      icon: "clock",
      tone: "light"
    }, "Mon\u2013Sat 9:00 AM \u2013 5:00 PM \xB7 Sun Closed"), /*#__PURE__*/React.createElement(Row, {
      icon: "shield-check",
      tone: "light"
    }, "Licensed & fully insured")), /*#__PURE__*/React.createElement(Card, {
      variant: "panel",
      padding: "var(--space-6)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3,
        color: "var(--amber-500)",
        marginBottom: 10
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 18,
      color: "var(--amber-500)"
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontSize: 18,
        lineHeight: 1.5,
        color: "var(--text-strong)",
        margin: "0 0 10px"
      }
    }, "\"[ Drop a real customer testimonial here \u2014 quality, clean-up, and value. ]\""), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "\u2014 Homeowner, [ City ], FL"))))));
  }
  function Row({
    icon,
    children,
    tone
  }) {
    const light = tone === "light";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontSize: 14,
        color: light ? "var(--text-on-dark-muted)" : "var(--text-body)",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17,
      color: "var(--amber-500)",
      style: {
        flex: "0 0 auto",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, children));
  }
  function ServicesScreen({
    onNavigate
  }) {
    const services = window.SERVICES || [];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--space-7) 0 var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        route: "home"
      }, {
        label: "Services"
      }],
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(SectionHeading, {
      as: "h1",
      eyebrow: "Our services",
      title: "Residential & commercial",
      accent: "painting.",
      maxWidth: "640px",
      lead: "From a single room to a full commercial exterior \u2014 careful prep, durable finishes, and a single point of contact from quote to final walkthrough."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 26,
        marginTop: 44
      },
      className: "services-grid-2"
    }, services.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.title,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-sm)"
      },
      className: "service-row"
    }, /*#__PURE__*/React.createElement(Placeholder, {
      label: `[ ${s.title} photo ]`,
      ratio: "auto",
      radius: "0"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "var(--radius-md)",
        background: "var(--amber-50)",
        border: "1px solid var(--amber-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--amber-600)",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: 22,
        margin: "0 0 10px",
        color: "var(--text-strong)"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        margin: "0 0 18px"
      }
    }, s.desc), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onNavigate("quote"),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Get a quote")))))));
  }
  function SimpleScreen({
    title,
    eyebrow,
    lead,
    onNavigate,
    crumb
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "var(--space-7) 0 var(--space-9)",
        minHeight: "50vh"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-narrow)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        route: "home"
      }, {
        label: crumb || title
      }],
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(SectionHeading, {
      as: "h1",
      eyebrow: eyebrow,
      title: title,
      lead: lead
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "panel",
      padding: "var(--space-7)",
      style: {
        marginTop: 32,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "hammer",
      size: 30,
      color: "var(--amber-600)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 20px",
        color: "var(--text-body)"
      }
    }, "This page follows the same system \u2014 section header, content blocks, and a closing quote CTA. Built out in the full site."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate("quote")
    }, "Get a Free Quote"))));
  }
  Object.assign(window, {
    QuoteScreen,
    ServicesScreen,
    SimpleScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
// Site chrome for the Scollo Painting website: Header, CtaBand, Footer.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const {
    Button,
    PhoneLink,
    Badge
  } = DS;
  const Icon = window.Icon;
  const NAV = [{
    label: "Home",
    route: "home"
  }, {
    label: "About",
    route: "about"
  }, {
    label: "Services",
    route: "services"
  }, {
    label: "Areas Serviced",
    route: "areas"
  }, {
    label: "Gallery",
    route: "gallery"
  }, {
    label: "FAQ",
    route: "faq"
  }, {
    label: "Contact",
    route: "contact"
  }];
  function Header({
    route,
    onNavigate
  }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    React.useEffect(() => {
      const el = document.querySelector("[data-scroll-root]") || window;
      const onScroll = () => {
        const y = el === window ? window.scrollY : el.scrollTop;
        setScrolled(y > 24);
      };
      el.addEventListener("scroll", onScroll);
      return () => el.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(250,248,244,0.86)" : "var(--surface-page)",
        backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
        transition: "background var(--dur-base), border-color var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        height: "var(--header-h)",
        display: "flex",
        alignItems: "center",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("home");
      },
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoLight || "../../assets/logo-wordmark.svg",
      alt: "Scollo Painting Inc.",
      style: {
        height: 42
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 4,
        marginLeft: 12
      },
      className: "primary-nav"
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.route,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(n.route);
      },
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 14.5,
        fontWeight: 600,
        color: route === n.route ? "var(--amber-700)" : "var(--stone-600)",
        padding: "8px 12px",
        borderRadius: "var(--radius-sm)",
        textDecoration: "none"
      }
    }, n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 18
      },
      className: "header-actions"
    }, /*#__PURE__*/React.createElement("span", {
      className: "header-phone",
      style: {
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(PhoneLink, null)), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      onClick: () => onNavigate("quote")
    }, "Get a Free Quote")), /*#__PURE__*/React.createElement("button", {
      className: "menu-btn",
      "aria-label": "Menu",
      onClick: () => setMenu(m => !m),
      style: {
        display: "none",
        marginLeft: "auto",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--navy-900)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: menu ? "x" : "menu",
      size: 26
    }))), menu && /*#__PURE__*/React.createElement("div", {
      className: "mobile-menu",
      style: {
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--surface-page)",
        padding: "12px var(--gutter) 20px"
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.route,
      href: "#",
      onClick: e => {
        e.preventDefault();
        setMenu(false);
        onNavigate(n.route);
      },
      style: {
        display: "block",
        padding: "12px 4px",
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        color: "var(--navy-900)",
        borderBottom: "1px solid var(--border-subtle)",
        textDecoration: "none"
      }
    }, n.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => {
        setMenu(false);
        onNavigate("quote");
      }
    }, "Get a Free Quote"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      href: "tel:+15613061813",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 17
      })
    }, "Call"))));
  }
  function CtaBand({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--navy-900)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-9) var(--gutter)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 32,
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement("hr", {
      style: {
        width: 48,
        height: 3,
        background: "var(--brand-accent)",
        border: 0,
        borderRadius: 999,
        margin: "0 0 18px"
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
        fontWeight: 600,
        color: "var(--text-on-dark)",
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
        margin: "0 0 12px"
      }
    }, "Ready for a finish that lasts? ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        fontWeight: 400,
        color: "var(--amber-400)"
      }
    }, "Let's talk.")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-on-dark-muted)",
        fontSize: 17,
        lineHeight: 1.6,
        margin: 0
      }
    }, "Fixed pricing quoted up front \u2014 no hidden costs. Serving Stuart and the Treasure Coast for over 45 years.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minWidth: 230
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNavigate("quote")
    }, "Get a Free Quote"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(PhoneLink, {
      tone: "light"
    })))));
  }
  const CITIES = ["Delray Beach", "Boca Raton", "Boynton Beach", "Wellington", "Palm Beach Gardens", "West Palm Beach", "Jupiter", "Hobe Sound", "Jensen Beach", "Lake Worth", "Highland Beach", "Lighthouse Point", "Fort Lauderdale", "Pompano Beach", "Coral Springs", "Parkland", "Deerfield Beach", "Manalapan", "North Palm Beach", "Royal Palm Beach"];
  const PAYMENTS = ["Visa", "Mastercard", "Discover", "Amex", "Check", "Cash"];
  function Footer({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--navy-950)",
        color: "var(--text-on-dark-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-9) var(--gutter) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
        gap: 40
      },
      className: "footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources.logoDark || "../../assets/logo-wordmark-dark.svg",
      alt: "Scollo Painting Inc.",
      style: {
        height: 46,
        marginBottom: 18
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.65,
        margin: "0 0 16px",
        maxWidth: 280
      }
    }, "Family-run residential & commercial painting contractor. Over 45 years of clean lines and durable finishes across the Treasure Coast."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(PhoneLink, {
      tone: "light"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FooterHead, null, "Company"), [["About", "about"], ["Services", "services"], ["Gallery", "gallery"], ["FAQ", "faq"], ["Get a Quote", "quote"]].map(([l, r]) => /*#__PURE__*/React.createElement(FooterLink, {
      key: r,
      onClick: () => onNavigate(r)
    }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FooterHead, null, "Services"), ["Interior Painting", "Exterior Painting", "Commercial Painting", "Plaster & Drywall Repair"].map(s => /*#__PURE__*/React.createElement(FooterLink, {
      key: s,
      onClick: () => onNavigate("services")
    }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FooterHead, null, "Visit / Contact"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        fontSize: 14,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 17,
      color: "var(--amber-500)",
      style: {
        flex: "0 0 auto",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, "848 S.E. Fleming Way", /*#__PURE__*/React.createElement("br", null), "Stuart, FL 34997")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        fontSize: 14,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 17,
      color: "var(--amber-500)",
      style: {
        flex: "0 0 auto",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", null, "Mon\u2013Sat 9:00 AM \u2013 5:00 PM", /*#__PURE__*/React.createElement("br", null), "Sunday Closed")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 120,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-on-dark)",
        background: "linear-gradient(135deg,#1b2c44,#16263d)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "var(--text-on-dark-muted)",
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map",
      size: 18,
      color: "var(--amber-400)"
    }), " [ Embed Google Map \u2014 Stuart, FL ]"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-on-dark)",
        marginTop: 40,
        paddingTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--text-on-dark-muted)",
        marginBottom: 12
      }
    }, "Areas Serviced"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 18px",
        fontSize: 13.5,
        marginBottom: 26
      }
    }, CITIES.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate("areas");
      },
      style: {
        color: "var(--text-on-dark-muted)",
        textDecoration: "none"
      }
    }, c)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-on-dark)",
        paddingTop: 22,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 18,
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, PAYMENTS.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.03em",
        color: "var(--text-on-dark)",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid var(--border-on-dark)",
        borderRadius: "var(--radius-xs)",
        padding: "5px 9px"
      }
    }, p)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        marginLeft: 6
      }
    }, "Licensed & fully insured")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5
      }
    }, "\xA9 ", new Date().getFullYear(), " Scollo Painting Inc. \xB7 All rights reserved."))));
  }
  function FooterHead({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--text-on-dark)",
        marginBottom: 14
      }
    }, children);
  }
  function FooterLink({
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onClick && onClick();
      },
      style: {
        display: "block",
        fontSize: 14.5,
        color: "var(--text-on-dark-muted)",
        textDecoration: "none",
        padding: "5px 0"
      }
    }, children);
  }
  Object.assign(window, {
    Header,
    Footer,
    CtaBand,
    CITIES,
    PAYMENTS
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PhoneLink = __ds_scope.PhoneLink;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.TrustItem = __ds_scope.TrustItem;

})();
