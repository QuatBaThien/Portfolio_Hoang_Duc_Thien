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
  "Reinsurance Systems",
  "AI-Assisted Workflows"
];

const chatResponses = {
  "bằng cấp & học vấn bách khoa": {
    answer: "Tôi tốt nghiệp chương trình Kỹ sư Công nghệ thông tin, xếp loại Giỏi (tháng 09/2024) tại Khoa Công nghệ thông tin Việt - Nhật (HEDSPI), Trường CNTT & Truyền thông (SoICT), Đại học Bách Khoa Hà Nội.\n\nChương trình học rèn luyện nền tảng toán giải thuật vững chắc, tư duy thiết kế phần mềm bài bản và tác phong làm việc chuẩn mực, cẩn thận của kỹ sư theo định hướng Nhật Bản.",
    source: "Học vấn"
  },
  "kinh nghiệm làm việc thực tế": {
    answer: "Quá trình làm việc thực tế của tôi:\n\n• 08/2024 - Hiện tại: PVI (Trung tâm CNTT) - Vị trí Web/App Fullstack Developer (nhân viên chính thức từ 11/2024). Tham gia phát triển, nâng cấp và bảo trì 4 hệ thống nghiệp vụ thực tế, hoàn thành hơn 20 chức năng/màn hình và API.\n• 12/2022 - 05/2023: Rikkeisoft - Thực tập sinh Frontend Dev (môi trường quy chuẩn Nhật Bản).\n• Năm 2022: MK Technology - Thực tập sinh Mobile Dev (công nghệ thẻ & bảo mật).",
    source: "Kinh nghiệm"
  },
  "cách tiếp cận & ứng dụng ai": {
    answer: "Quan điểm của tôi về AI là 'Công cụ trợ lực có kiểm chứng':\n\n• Tôi sử dụng AI để hỗ trợ đọc hiểu nhanh các luồng mã nguồn kế thừa và tóm tắt cấu trúc phụ thuộc.\n• Tôi tự xây dựng kịch bản kiểm thử (Custom Skill 'pre-push-tester') để tự động hóa khâu kiểm tra định dạng mã nguồn (UTF-8 BOM, CRLF) và rà soát git diff trước khi đẩy code lên kho lưu trữ chung (pre-push).\n• Dùng AI tạo các đoạn mã khung (boilerplate) để tiết kiệm thời gian, tập trung trí lực vào xử lý nghiệp vụ và kiểm chứng tính toàn vẹn của dữ liệu.",
    source: "Ứng dụng AI"
  },
  "kinh nghiệm với các phần mềm hà nội re": {
    answer: "Tại PVI, tôi tham gia phát triển, nâng cấp và bảo trì 4 hệ thống nghiệp vụ quan trọng phục vụ Hà Nội Re:\n\n1. Ứng dụng di động ReSmart (Phát triển tính năng & nâng cấp): Phục vụ điều hành, phê duyệt điện tử, tra cứu thông tin nghiệp vụ và xem báo cáo trên thiết bị di động.\n2. Hệ thống SOA điện tử - e-SOA (Nâng cấp & bảo trì Production): Quản lý, đối chiếu bảng kê tài khoản, tối ưu hóa truy vấn đối soát và hỗ trợ xử lý dữ liệu vận hành.\n3. Hệ thống Quản lý & Rà soát hợp đồng - Web Contract Review (Phát triển mới / Hiện đại hóa): Xây dựng giao diện Web, API nghiệp vụ và thử nghiệm tích hợp AI/OCR hỗ trợ bóc tách thông tin từ tài liệu PDF.\n4. Hệ thống Quản trị nghiệp vụ lõi - PVIRe2022 (Bảo trì & hỗ trợ vận hành): Bảo trì mã nguồn, xử lý yêu cầu kỹ thuật phát sinh và đảm bảo đồng bộ dữ liệu.\n\nTôi sẵn sàng trao đổi chi tiết trực tiếp trong phỏng vấn chuyên môn. Số điện thoại liên hệ: 0386 832 065.",
    source: "Dự án Hà Nội Re"
  }
};

const defaultChatReply = {
  answer: "Bạn có thể hỏi tôi về: Bằng cấp Bách Khoa, Kinh nghiệm làm việc, Công nghệ sử dụng, Cách tôi ứng dụng AI vào công việc, hoặc Kinh nghiệm tham gia các phần mềm nghiệp vụ của Hà Nội Re.",
  source: "Trợ lý hồ sơ"
};

const terminalResponses = {
  whoami: "Hoàng Đức Thiện (SN 27/07/2001, Hà Nội). Kỹ sư CNTT xếp loại Giỏi - ĐH Bách Khoa Hà Nội. Vị trí: Web/App Fullstack Developer.",
  education: "Tốt nghiệp chương trình Kỹ sư CNTT, xếp loại Giỏi (09/2024) - Khoa CNTT Việt - Nhật (HEDSPI), Trường CNTT & TT, ĐH Bách Khoa Hà Nội.",
  experience: "08/2024 - Nay: PVI (Trung tâm CNTT, chính thức 11/2024) | 12/2022 - 05/2023: Rikkeisoft (FE Dev) | 2022: MK Tech (Mobile Dev).",
  skills: "Backend (.NET, C#, VB.NET, Web API), Frontend (JS, TS, React, HTML/CSS, React Native), CSDL (SQL Server, Oracle, Stored Procedures), Kiểm thử & rà soát mã nguồn.",
  "ai-tools": "Tận dụng AI có kiểm chứng: Hỗ trợ đọc hiểu code cũ, tạo boilerplate và xây dựng kịch bản kiểm tra git diff, định dạng UTF-8 BOM/CRLF trước khi đẩy code (pre-push).",
  projects: "Tham gia phát triển & bảo trì 4 hệ thống nghiệp vụ: 1. Ứng dụng di động ReSmart | 2. Hệ thống SOA điện tử (e-SOA) | 3. Web Contract Review (Quản lý HĐ & thử nghiệm AI/OCR) | 4. Hệ thống nghiệp vụ lõi PVIRe2022.",
  hanoire: "Tham gia phát triển, nâng cấp và bảo trì vận hành 4 hệ thống: ReSmart, e-SOA, Web Contract Review, PVIRe2022. Liên hệ: 0386 832 065.",
  contact: "Hoàng Đức Thiện | SĐT & Zalo: 0386 832 065 | Địa chỉ: Hà Nội.",
  help: "Danh sách lệnh: whoami, education, experience, skills, ai-tools, projects, hanoire, contact, clear, exit"
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
  if (normalized.includes("học vấn") || normalized.includes("bách khoa") || normalized.includes("bằng") || normalized.includes("hust")) {
    return chatResponses["bằng cấp & học vấn bách khoa"];
  }
  if (normalized.includes("kinh nghiệm") || normalized.includes("làm việc") || normalized.includes("công tác") || normalized.includes("pvi") || normalized.includes("rikkei") || normalized.includes("mk")) {
    return chatResponses["kinh nghiệm làm việc thực tế"];
  }
  if (normalized.includes("ai") || normalized.includes("agent") || normalized.includes("công cụ") || normalized.includes("tool") || normalized.includes("kiểm thử")) {
    return chatResponses["cách tiếp cận & ứng dụng ai"];
  }
  if (normalized.includes("resmart") || normalized.includes("soa") || normalized.includes("contract") || normalized.includes("pvire") || normalized.includes("hà nội re") || normalized.includes("hanoi re") || normalized.includes("tái bảo hiểm") || normalized.includes("dự án")) {
    return chatResponses["kinh nghiệm với các phần mềm hà nội re"];
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
      appendMessage("Xin chào! Bạn có thể chọn câu hỏi bên dưới hoặc nhập câu hỏi về học vấn Bách Khoa, kinh nghiệm làm việc, cách tôi ứng dụng AI, hoặc các phần mềm ReSmart, SOA phục vụ Hà Nội Re.", "bot");
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
  appendTerminalLine(terminalResponses[normalized] || "Lệnh không xác định. Thử: whoami, education, experience, skills, ai-tools, projects, hanoire, clear, exit.");
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
