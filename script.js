const body = document.body;
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.querySelector(".back-to-top");
const progressBar = document.querySelector(".scroll-progress");
const spotlight = document.querySelector(".spotlight");

const typingText = document.getElementById("typingText");
const particlesRoot = document.getElementById("particles");
const chatWindow = document.getElementById("chatWindow");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const suggestionPills = document.querySelectorAll(".suggestion-pill");
const terminalOverlay = document.getElementById("terminalOverlay");
const terminalBody = document.getElementById("terminalBody");
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalClose = document.querySelector(".terminal-close");
const heroVisual = document.querySelector(".profile-shell");
const heroGlows = document.querySelectorAll(".hero-glow");

// Floating Chatbot DOM elements
const chatTriggerBtn = document.getElementById("chatTriggerBtn");
const chatSidebarWrapper = document.getElementById("chatSidebarWrapper");
const chatSidebarClose = document.getElementById("chatSidebarClose");
const chatSidebarBackdrop = document.getElementById("chatSidebarBackdrop");
const chatTooltip = document.getElementById("chatTooltip");
const closeTooltipBtn = document.getElementById("closeTooltipBtn");

const typingPhrases = [
  "Tái bảo hiểm",
  ".NET · React Native · SQL Server"
];

const chatResponses = {
  "bằng cấp & học vấn bách khoa": {
    answer: "Tôi tốt nghiệp Kỹ sư Công nghệ thông tin tháng 09/2024, chương trình Việt - Nhật (HEDSPI), Trường CNTT & Truyền thông, Đại học Bách Khoa Hà Nội. GPA 3.2/4, xếp loại Giỏi.\n\nNgoại ngữ: tiếng Anh giao tiếp, đọc hiểu tài liệu kỹ thuật; tiếng Nhật JLPT N3 (2022).",
    source: "Học vấn"
  },
  "kinh nghiệm làm việc thực tế": {
    answer: "• 08/2024 - nay: Trung tâm CNTT PVI - Lập trình viên Web/App Fullstack (chính thức từ 11/2024). Phát triển và vận hành 4 hệ thống nghiệp vụ tái bảo hiểm; tự deploy production và phát hành app lên App Store / Google Play.\n• 12/2022 - 05/2023: Rikkeisoft - Thực tập sinh Frontend (React, TypeScript).\n• 04/2022 - 01/2023: MK Technology - Thực tập sinh Mobile.",
    source: "Kinh nghiệm"
  },
  "cách tiếp cận & ứng dụng ai": {
    answer: "Tôi dùng AI coding assistant để đọc nhanh mã nguồn cũ. Tôi cũng tự xây dựng công cụ pre-push-tester để kiểm tra code trước khi đưa lên hệ thống chung: thay đổi đã đúng yêu cầu ban đầu chưa, có ảnh hưởng đến chức năng khác không, có lỗi ngầm hay lỗi định dạng file không. Kết quả báo theo 3 mức: Đạt / Cần lưu ý / Lỗi. Kết quả AI đưa ra tôi đều tự đọc lại và kiểm chứng trước khi đưa lên Production.\n\nNgoài ra tôi phụ trách phần trích xuất hợp đồng tái bảo hiểm PDF (Treaty/Facultative) bằng AI/OCR trong dự án web rà soát hợp đồng (đang kiểm thử).",
    source: "Ứng dụng AI"
  },
  "các dự án đã làm": {
    answer: "4 hệ thống nghiệp vụ tái bảo hiểm tôi làm tại Trung tâm CNTT PVI:\n\n1. App điều hành di động: đưa tính toán báo cáo về Backend + cache, thời gian tải từ hơn 1 phút xuống 1–2 giây; làm thêm web quản trị import lịch họp, xem khảo sát.\n2. Hệ thống bảng kê SOA (Inward/Outward): vận hành, hỗ trợ đối soát số liệu phí, hoa hồng, bồi thường (Claim); làm thêm chức năng nhập chứng từ đơn lẻ.\n3. Web rà soát hợp đồng (Treaty/Facultative): phụ trách trích xuất hợp đồng PDF bằng AI/OCR (đang kiểm thử).\n4. Hệ thống nghiệp vụ lõi (VB.NET): hỗ trợ vận hành, sửa lỗi, nâng cấp nhỏ.\n\nChi tiết tôi xin trao đổi trực tiếp khi phỏng vấn. Liên hệ: 0386 832 065 / Thienhd4.hmc@gmail.com.",
    source: "Dự án"
  }
};

const defaultChatReply = {
  answer: "Bạn có thể hỏi về: học vấn, kinh nghiệm làm việc, công nghệ sử dụng, cách tôi dùng AI, hoặc các dự án đã làm.",
  source: "Trợ lý hồ sơ (trả lời tự động)"
};

const terminalResponses = {
  whoami: "Hoàng Đức Thiện (Hà Nội). Kỹ sư CNTT - ĐH Bách Khoa Hà Nội. Phát triển & vận hành hệ thống nghiệp vụ tái bảo hiểm.",
  education: "Kỹ sư CNTT (09/2024) - HEDSPI, ĐH Bách Khoa Hà Nội. GPA 3.2/4, loại Giỏi. JLPT N3.",
  experience: "08/2024 - nay: Trung tâm CNTT PVI (chính thức 11/2024) | 12/2022 - 05/2023: Rikkeisoft (FE intern) | 04/2022 - 01/2023: MK Technology (Mobile intern).",
  skills: "Backend (C#, ASP.NET Web API, VB.NET) | Mobile & Web (React Native, React, TypeScript) | CSDL (SQL Server, Stored Procedures) | Deploy Production, App Store / Google Play.",
  "ai-tools": "Dùng AI để đọc nhanh code cũ; skill pre-push-tester tự xây dựng: kiểm tra trước khi push xem thay đổi đúng yêu cầu chưa, có ảnh hưởng phần khác không, có lỗi ngầm không; phụ trách trích xuất hợp đồng PDF bằng AI/OCR (đang kiểm thử).",
  projects: "1. App điều hành di động (báo cáo từ >1 phút xuống 1–2s) | 2. Hệ thống bảng kê SOA | 3. Web rà soát hợp đồng (AI/OCR) | 4. Hệ thống nghiệp vụ lõi (VB.NET).",
  contact: "Hoàng Đức Thiện | SĐT & Zalo: 0386 832 065 | Email: Thienhd4.hmc@gmail.com | Hà Nội.",
  help: "Danh sách lệnh: whoami, education, experience, skills, ai-tools, projects, contact, clear, exit"
};

function toggleScrolledState() {
  const scrolled = window.scrollY > 24;
  navbar.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 480);

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;

  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrollTop * -0.03}px)`;
  }

  heroGlows.forEach((glow, index) => {
    const modifier = index === 0 ? -0.02 : -0.04;
    glow.style.transform = `translateY(${scrollTop * modifier}px)`;
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function typeLoop(index = 0, charIndex = 0, deleting = false) {
  if (!typingText) return;
  const phrase = typingPhrases[index];
  const current = deleting ? phrase.slice(0, charIndex - 1) : phrase.slice(0, charIndex + 1);
  typingText.textContent = current;

  let delay = deleting ? 35 : 65;
  if (!deleting && current === phrase) {
    delay = 1800;
    deleting = true;
  } else if (deleting && current.length === 0) {
    deleting = false;
    index = (index + 1) % typingPhrases.length;
    delay = 240;
  }

  const nextCharIndex = current.length;
  window.setTimeout(() => typeLoop(index, nextCharIndex, deleting), delay);
}

function createParticles(count = 20) {
  if (!particlesRoot) return;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 8}s`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.opacity = `${Math.random() * 0.45 + 0.15}`;
    fragment.appendChild(particle);
  }
  particlesRoot.appendChild(fragment);
}

function appendMessage(text, type, source = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `chat-message-wrapper ${type}`;

  if (type === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.innerHTML = `
      <svg class="agent-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
      </svg>
    `;
    wrapper.appendChild(avatar);
  }

  const message = document.createElement("div");
  message.className = `chat-message ${type}`;
  const paragraph = document.createElement("p");
  message.appendChild(paragraph);

  wrapper.appendChild(message);
  chatWindow.appendChild(wrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  if (type === "bot") {
    chatInput.disabled = true;
    const submitBtn = chatForm.querySelector("button");
    if (submitBtn) submitBtn.disabled = true;

    let i = 0;
    const speed = 12;
    function typeWriter() {
      if (i < text.length) {
        paragraph.textContent += text.charAt(i);
        i++;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        setTimeout(typeWriter, speed);
      } else {
        chatInput.disabled = false;
        if (submitBtn) submitBtn.disabled = false;
        chatInput.focus();

        if (source) {
          const sourceLine = document.createElement("small");
          sourceLine.className = "chat-source";
          sourceLine.textContent = `Chủ đề: ${source}`;
          message.appendChild(sourceLine);
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }
      }
    }
    typeWriter();
  } else {
    paragraph.textContent = text;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

function getChatReply(message) {
  const normalized = message.trim().toLowerCase();
  if (chatResponses[normalized]) return chatResponses[normalized];
  if (normalized.includes("dự án") || normalized.includes("hệ thống") || normalized.includes("soa") || normalized.includes("hợp đồng") || normalized.includes("tái bảo hiểm") || normalized.includes("app")) {
    return chatResponses["các dự án đã làm"];
  }
  if (normalized.includes("học vấn") || normalized.includes("bách khoa") || normalized.includes("bằng") || normalized.includes("hust") || normalized.includes("gpa") || normalized.includes("ngoại ngữ")) {
    return chatResponses["bằng cấp & học vấn bách khoa"];
  }
  if (normalized.includes("kinh nghiệm") || normalized.includes("làm việc") || normalized.includes("công tác") || normalized.includes("pvi") || normalized.includes("rikkei") || normalized.includes("mk")) {
    return chatResponses["kinh nghiệm làm việc thực tế"];
  }
  if (/\bai\b/.test(normalized) || normalized.includes("agent") || normalized.includes("ocr") || normalized.includes("công cụ") || normalized.includes("tool")) {
    return chatResponses["cách tiếp cận & ứng dụng ai"];
  }
  return defaultChatReply;
}

function handleChatSubmit(message) {
  if (!message.trim()) return;
  appendMessage(message, "user");
  chatInput.value = "";
  const reply = getChatReply(message);
  window.setTimeout(() => appendMessage(reply.answer, "bot", reply.source), 250);
}

function appendTerminalLine(text) {
  const line = document.createElement("p");
  line.innerHTML = text;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function openTerminal() {
  terminalOverlay.classList.add("active");
  terminalOverlay.setAttribute("aria-hidden", "false");
  body.classList.add("terminal-open");
  terminalInput.focus();
}

function closeTerminal() {
  terminalOverlay.classList.remove("active");
  terminalOverlay.setAttribute("aria-hidden", "true");
  body.classList.remove("terminal-open");
}

let welcomeMessageTyped = false;

function openChatSidebar() {
  chatSidebarWrapper.classList.add("active");
  chatSidebarWrapper.setAttribute("aria-hidden", "false");
  body.classList.add("chat-sidebar-open");

  window.setTimeout(() => {
    chatInput.focus();
  }, 400);

  hideChatTooltip();

  if (!welcomeMessageTyped) {
    welcomeMessageTyped = true;
    chatWindow.innerHTML = "";
    window.setTimeout(() => {
      appendMessage("Xin chào! Bạn có thể chọn câu hỏi bên dưới hoặc nhập câu hỏi về học vấn, kinh nghiệm làm việc, cách tôi dùng AI, hoặc các dự án đã làm.", "bot");
    }, 350);
  }
}

let tooltipClosedExplicitly = false;

function closeChatSidebar() {
  chatSidebarWrapper.classList.remove("active");
  chatSidebarWrapper.setAttribute("aria-hidden", "true");
  body.classList.remove("chat-sidebar-open");
  if (!tooltipClosedExplicitly) {
    showChatTooltip();
  }
}

function showChatTooltip() {
  if (!chatSidebarWrapper.classList.contains("active") && !tooltipClosedExplicitly && chatTooltip) {
    chatTooltip.classList.add("show");
  }
}

function hideChatTooltip() {
  if (chatTooltip) chatTooltip.classList.remove("show");
}

function runTerminalCommand(command) {
  const normalized = command.trim().toLowerCase();
  if (normalized === "clear") {
    terminalBody.innerHTML = "";
    return;
  }
  if (normalized === "exit") {
    closeTerminal();
    return;
  }
  appendTerminalLine(`<span class="prompt">visitor@thien:~$</span> ${normalized}`);
  appendTerminalLine(terminalResponses[normalized] || "Lệnh không xác định. Thử: whoami, education, experience, skills, ai-tools, projects, contact, clear, exit.");
}

function initMagneticButtons() {
  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  body.classList.add("loaded");
});

window.addEventListener("load", () => {
  body.classList.add("loaded");
});

window.addEventListener("scroll", toggleScrolledState);
toggleScrolledState();

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isActive));
    body.classList.toggle("menu-open", isActive);
  });
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  });
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (spotlight) {
    spotlight.style.setProperty("--x", `${mouseX}px`);
    spotlight.style.setProperty("--y", `${mouseY}px`);
  }
});

if (chatForm) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleChatSubmit(chatInput.value);
  });
}

suggestionPills.forEach((pill) => {
  pill.addEventListener("click", () => handleChatSubmit(pill.textContent || ""));
});

if (chatTriggerBtn) {
  chatTriggerBtn.addEventListener("click", () => {
    if (chatSidebarWrapper.classList.contains("active")) {
      closeChatSidebar();
    } else {
      openChatSidebar();
    }
  });
}

if (chatSidebarClose) chatSidebarClose.addEventListener("click", closeChatSidebar);
if (chatSidebarBackdrop) chatSidebarBackdrop.addEventListener("click", closeChatSidebar);
if (closeTooltipBtn) {
  closeTooltipBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    tooltipClosedExplicitly = true;
    hideChatTooltip();
  });
}

if (terminalForm) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = terminalInput.value;
    if (!command.trim()) return;
    runTerminalCommand(command);
    terminalInput.value = "";
  });
}

if (terminalClose) terminalClose.addEventListener("click", closeTerminal);
if (terminalOverlay) {
  terminalOverlay.addEventListener("click", (event) => {
    if (event.target === terminalOverlay) closeTerminal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (terminalOverlay && terminalOverlay.classList.contains("active")) {
      closeTerminal();
      return;
    }
    if (chatSidebarWrapper && chatSidebarWrapper.classList.contains("active")) {
      closeChatSidebar();
      return;
    }
  }

  const target = event.target;
  const isInput = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
  if (isInput) return;

  if (event.key === "`") {
    event.preventDefault();
    openTerminal();
  }
});

createParticles();
initRevealAnimations();
typeLoop();
initMagneticButtons();

window.addEventListener("load", () => {
  window.setTimeout(showChatTooltip, 500);
});
