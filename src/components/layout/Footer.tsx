"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center mb-10">
      <div className="text-[10px]">
        <p>
          Designed & Developed by{" "}
          <strong className="text-[9px]">Pustam Rai</strong>
        </p>
        <p>© {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}
