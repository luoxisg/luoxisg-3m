import React, { useState } from "react";
import {
  Menu,
  Search,
  Globe,
  ChevronRight,
  ArrowRight,
  Download,
  Play,
  FileText,
  X,
  MapPin,
  Mail
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isZH = lang === "zh";

  // 3M Brand Colors Reference:
  // Red: #FF0000 (Primary Brand)
  // Dark Gray: #333333 (Text/Footer)
  // Light Gray: #F2F2F2 (Backgrounds)

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto h-[72px] px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8 h-full">
            {/* Logo - 3M Style Red Box */}
            <div className="bg-[#FF0000] text-white w-[72px] h-[72px] -ml-4 md:ml-0 flex items-center justify-center font-black text-2xl tracking-tighter shrink-0">
              DCDT
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-[15px] font-bold text-[#4b4b4b]">
              <a href="#solutions" className="hover:text-[#FF0000] hover:underline decoration-[#FF0000] underline-offset-4 decoration-2 transition-colors">
                {isZH ? "解决方案" : "Solutions"}
              </a>
              <a href="#roadmap" className="hover:text-[#FF0000] hover:underline decoration-[#FF0000] underline-offset-4 decoration-2 transition-colors">
                 {isZH ? "合作路线" : "Roadmap"}
              </a>
              <a href="#technology" className="hover:text-[#FF0000] hover:underline decoration-[#FF0000] underline-offset-4 decoration-2 transition-colors">
                 {isZH ? "核心技术" : "Technology"}
              </a>
              <a href="#resources" className="hover:text-[#FF0000] hover:underline decoration-[#FF0000] underline-offset-4 decoration-2 transition-colors">
                 {isZH ? "资源中心" : "Resources"}
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-[#FF0000]" onClick={() => setLang(isZH ? 'en' : 'zh')}>
                <Globe className="w-4 h-4" />
                <span>{isZH ? "EN" : "中文"}</span>
             </div>
             <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#FF0000]" />
             <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-6 h-6 text-gray-600" />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-4 animate-in slide-in-from-right duration-300">
           <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                 <X className="w-8 h-8 text-[#333333]" />
              </button>
           </div>
           <nav className="mt-8 flex flex-col gap-6 text-xl font-bold px-4">
              <a href="#solutions" onClick={() => setIsMenuOpen(false)}>{isZH ? "解决方案" : "Solutions"}</a>
              <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>{isZH ? "合作路线" : "Roadmap"}</a>
              <a href="#technology" onClick={() => setIsMenuOpen(false)}>{isZH ? "核心技术" : "Technology"}</a>
              <a href="#resources" onClick={() => setIsMenuOpen(false)}>{isZH ? "资源中心" : "Resources"}</a>
              <div className="border-t border-gray-200 pt-6 mt-2">
                <button onClick={() => {setLang(isZH ? 'en' : 'zh'); setIsMenuOpen(false)}} className="text-left text-[#FF0000] flex items-center gap-2">
                   <Globe className="w-5 h-5" />
                   {isZH ? "Switch to English" : "切换至中文"}
                </button>
              </div>
           </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#f2f2f2] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 min-h-[500px]">
           <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 z-10">
              {/* Red arrow accent - iconic 3M web element */}
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[18px] border-t-[#FF0000] border-r-[12px] border-r-transparent mb-6"></div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#333333] mb-6 tracking-tight">
                 {isZH 
                   ? "面向 AI 时代的 OCP ORv3 高密度基础设施" 
                   : "OCP ORv3 High-Density Infrastructure for the AI Era"}
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8 font-light">
                 {isZH 
                   ? "基于《DCDeepTech OCP ORv3 基础设施深度技术整合报告》，梳理 DCDT 与生态伙伴在机柜、供电与 3M EBO / TwinAx 互连上的联合合作路线，从概念验证到批量交付。"
                   : "Based on the \"DCDeepTech OCP ORv3 Infrastructure Deep Integration Report\", this page outlines how DCDT and partners co-develop cabinet, power and 3M EBO / TwinAx interconnect solutions."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <button className="bg-[#FF0000] hover:bg-[#d40000] text-white px-8 py-3 rounded-full font-bold text-[15px] flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                    {isZH ? "下载白皮书 (PDF)" : "Download Whitepaper (PDF)"}
                    <Download className="w-4 h-4" />
                 </button>
                 <button className="group bg-transparent border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white px-8 py-3 rounded-full font-bold text-[15px] flex items-center gap-2 transition-all">
                    {isZH ? "预约技术对接" : "Technical Alignment Call"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>

           {/* Hero Image Area - Tech abstract */}
           <div className="relative h-64 md:h-auto bg-gray-300 overflow-hidden">
                {/* Diagonal overlay effect */}
               <div className="absolute top-0 bottom-0 -left-16 w-32 bg-[#f2f2f2] -skew-x-12 z-10 hidden md:block border-r-4 border-white"></div>
               
               <img 
                 src="./image/ocp-orv3-architecture.png" 
                 alt="OCP ORv3 Architecture"
                 className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-400');
                 }}
               />
               <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold text-[#333333] rounded-sm shadow-sm z-20">
                  {isZH ? "架构总览示意" : "Architecture Overview"}
               </div>
           </div>
        </div>
      </section>

      {/* Value Proposition Grid - 3M Card Style */}
      <section id="solutions" className="py-20 max-w-[1440px] mx-auto px-6 md:px-12">
         <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: isZH ? "空间换效率" : "Space-for-efficiency",
                subtitle: isZH ? "21\" ORv3 架构" : "21\" ORv3 Architecture",
                desc: isZH ? "从 19\" 向 21\" ORv3 迁移，侧边空间专用化给 TwinAx 线缆与气流管理。" : "Migrating from 19\" to 21\" ORv3, dedicating side space to TwinAx routing and airflow management.",
                icon: "21\""
              },
              {
                title: isZH ? "电压换密度" : "Voltage-for-density",
                subtitle: isZH ? "48V Busbar 供电" : "48V Busbar Power",
                desc: isZH ? "33kW 电源架 + 48V Busbar，将 I²R 损耗降至 1/16，释放高功率 GPU 柜。" : "33 kW shelves + 48 V busbar cut I²R loss to 1/16, enabling high-power GPU racks.",
                icon: "48V"
              },
              {
                title: isZH ? "互连友好" : "Interconnect-friendly",
                subtitle: isZH ? "3M™ EBO / TwinAx" : "3M™ EBO / TwinAx",
                desc: isZH ? "为 3M EBO / TwinAx 提供零应力布线与正压洁净环境，保障 112G / 224G SI。" : "Provides zero-stress routing and clean positive-pressure paths for 3M EBO / TwinAx at 112G / 224G.",
                icon: "EBO"
              }
            ].map((item, idx) => (
               <div key={idx} className="group bg-white border border-gray-200 p-8 flex flex-col items-start cursor-pointer hover:shadow-xl hover:border-gray-300 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#FF0000] transition-colors"></div>
                  
                  <div className="w-14 h-14 bg-gray-100 text-[#FF0000] font-black flex items-center justify-center rounded-full mb-6 text-sm group-hover:bg-[#FF0000] group-hover:text-white transition-colors">
                     {item.icon}
                  </div>
                  
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{item.subtitle}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#333333]">
                     {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-grow">
                     {item.desc}
                  </p>
                  <div className="text-[#FF0000] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                     {isZH ? "了解详情" : "Learn more"} <ArrowRight className="w-4 h-4" />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Roadmap Section - Process Flow */}
      <section id="roadmap" className="bg-[#333333] text-white py-24">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-gray-600 pb-8">
               <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                     {isZH ? "技术合作三阶段路线" : "Three-phase Technical Cooperation Roadmap"}
                  </h2>
                  <div className="w-20 h-1.5 bg-[#FF0000]"></div>
               </div>
               <p className="text-gray-300 text-sm md:max-w-md md:text-right">
                  {isZH ? "从架构共识到联合 PoC，再到标准化 ORv3 模块量产。" : "From architectural alignment and joint PoC to standardized ORv3 module production."}
               </p>
            </div>

            <div className="grid md:grid-cols-3">
               {[
                 {
                   phase: isZH ? "阶段 1" : "Phase 1",
                   title: isZH ? "架构对齐 & 机柜验证" : "Architecture Alignment",
                   items: isZH ? [
                     "ORv3 21\" 接口定义", 
                     "21\"→19\" 适配导轨验证", 
                     "单柜级机械承载与 CFD"
                    ] : [
                      "ORv3 21\" interface definition",
                      "21\"→19\" adapter validation",
                      "Mechanical & CFD validation"
                    ]
                 },
                 {
                   phase: isZH ? "阶段 2" : "Phase 2",
                   title: isZH ? "电气整合 & 3M 互连 PoC" : "Integration & 3M PoC",
                   items: isZH ? [
                     "33kW 电源架挂载 GPU",
                     "TwinAx SI 与 EBO 盲插测试",
                     "RMU 功率-温度-误码率遥测"
                   ] : [
                     "33kW shelf + GPU load",
                     "TwinAx SI & EBO blind-mate",
                     "RMU telemetry closing the loop"
                   ]
                 },
                 {
                   phase: isZH ? "阶段 3" : "Phase 3",
                   title: isZH ? "标准化模组 & 交付" : "Standardization & Rollout",
                   items: isZH ? [
                     "ORv3 + 3M 互连一体化 BOM",
                     "新加坡 / 东南亚部署培训",
                     "OCP 社区参考设计认证"
                   ] : [
                     "Integrated BOM finalization",
                     "SE Asia deployment training",
                     "OCP Reference Design cert"
                   ]
                 }
               ].map((step, idx) => (
                 <div key={idx} className="relative bg-[#404040] p-10 border-r border-gray-600 last:border-0 hover:bg-[#4a4a4a] transition-colors group">
                    <div className="absolute top-0 left-0 bg-[#FF0000] text-white text-xs font-bold px-3 py-1">
                      {step.phase}
                    </div>
                    <div className="mt-6 mb-6">
                        <h3 className="text-xl font-bold group-hover:text-white text-gray-100 leading-tight">
                        {step.title}
                        </h3>
                    </div>
                    <ul className="space-y-4">
                       {step.items.map((li, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                             <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full mt-1.5 shrink-0"></div>
                             <span className="leading-snug">{li}</span>
                          </li>
                       ))}
                    </ul>
                    {/* Visual Chevron for process flow */}
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-12 bg-[#404040] rotate-45 border-t border-r border-gray-600 z-10 group-hover:bg-[#4a4a4a] transition-colors"></div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Technical Deep Dive - Document Style */}
      <section id="technology" className="py-24 bg-white">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
                <div className="space-y-6">
                   <h2 className="text-3xl font-bold text-[#333333]">
                      {isZH ? "关键技术支柱" : "Key Technical Pillars"}
                   </h2>
                   <p className="text-gray-600 leading-relaxed">
                      {isZH 
                        ? "报告从机械、电气与互连三大维度解构 ORv3 架构。点击右侧模块查看详细技术规格与测试报告。" 
                        : "The report dissects ORv3 across mechanical, electrical and interconnect dimensions. Explore the modules to view specs and reports."}
                   </p>
                   <button className="text-[#FF0000] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                      {isZH ? "浏览完整文档库" : "Browse Document Library"} <ChevronRight className="w-4 h-4"/>
                   </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                   <article className="border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-gray-50 rounded-sm group">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{isZH ? "机械架构" : "Mechanical"}</div>
                      <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#FF0000] transition-colors">
                        {isZH ? "21\" ORv3 几何 + 适配" : "21\" ORv3 Geometry"}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                         {isZH ? "重点验证 21\" 与 19\" 的空间差、OpenU 高度与 21→19 适配导轨在重载 GPU 柜下的形变控制。" : "Focus on 21\" vs 19\" space delta, OpenU height, and adapter rail deflection under heavy GPU loads."}
                      </p>
                      <div className="flex justify-end">
                         <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#FF0000]" />
                      </div>
                   </article>

                   <article className="border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-gray-50 rounded-sm group">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{isZH ? "电气架构" : "Electrical"}</div>
                      <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#FF0000] transition-colors">
                        {isZH ? "33kW 电源架 + 48V" : "33kW Power + 48V"}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                         {isZH ? "分析 N+1 冗余拓扑、I²R 损耗优势、BB1000 连接器接触电阻与热插拔安全。" : "Analyse N+1 redundancy, I²R loss benefits, BB1000 contact resistance & hot-swap safety."}
                      </p>
                      <div className="flex justify-end">
                         <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#FF0000]" />
                      </div>
                   </article>

                   <article className="border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-gray-50 rounded-sm group">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{isZH ? "3M 互连" : "3M Interconnect"}</div>
                      <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#FF0000] transition-colors">
                        {isZH ? "TwinAx + EBO 风道" : "TwinAx + EBO Paths"}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                         {isZH ? "围绕 TwinAx 弯曲半径、阻抗连续性，结合 EBO 正压防尘与等电位接地网络。" : "Target TwinAx bend radius, impedance continuity, plus EBO positive-pressure dust control."}
                      </p>
                      <div className="flex justify-end">
                         <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#FF0000]" />
                      </div>
                   </article>
                </div>
            </div>
         </div>
      </section>

      {/* Video Section - Updated Title */}
      <section className="bg-[#f2f2f2] py-24">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-10">
               <div>
                  <h2 className="text-3xl font-bold text-[#333333]">
                     {isZH ? "整体方案介绍" : "Overall Solution Introduction"}
                  </h2>
                  <div className="w-16 h-1 bg-[#FF0000] mt-3"></div>
               </div>
               <a href="#" className="hidden md:flex text-[#FF0000] text-sm font-bold items-center gap-2 hover:gap-3 transition-all">
                  {isZH ? "查看所有视频" : "View All Videos"} <ArrowRight className="w-4 h-4"/>
               </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {/* Video 1 */}
               <div className="bg-white p-4 shadow-sm group">
                  <div className="relative aspect-video bg-black mb-4 overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                           <Play className="w-6 h-6 text-[#FF0000] ml-1 fill-[#FF0000]" />
                        </div>
                     </div>
                     <video src="./video/dcdt-orv3-overview.mp4" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" controls />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#FF0000] transition-colors">
                     {isZH ? "项目总览 / 创始人路演" : "Project Overview / Founder Pitch"}
                  </h3>
                  <p className="text-sm text-gray-500">
                     {isZH ? "解释为何选择 ORv3 + 3M 方案，以及新加坡 / OCP 生态合作模式。" : "Explaining why ORv3 + 3M and the Singapore / OCP collaboration model."}
                  </p>
               </div>

               {/* Video 2 */}
               <div className="bg-white p-4 shadow-sm group">
                  <div className="relative aspect-video bg-black mb-4 overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                           <Play className="w-6 h-6 text-[#FF0000] ml-1 fill-[#FF0000]" />
                        </div>
                     </div>
                     <video src="./video/3m-twinax-ebo-demo.mp4" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" controls />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#FF0000] transition-colors">
                     {isZH ? "互连与布线实拍" : "Interconnect & Cabling Demo"}
                  </h3>
                  <p className="text-sm text-gray-500">
                     {isZH ? "TwinAx 布线、EBO 盲插、RMU 遥测界面等关键场景。" : "TwinAx routing, EBO blind-mate and RMU telemetry views."}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
         <h2 className="text-2xl font-bold text-[#333333] mb-8">
            {isZH ? "图像展示 (./image)" : "Image Showcase"}
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
               { src: "./image/orv3-rack-front.png", text: isZH ? "ORv3 机柜正视图" : "ORv3 Rack Front View" },
               { src: "./image/busbar-rear.png", text: isZH ? "48V 母排与 BB1000" : "48V Busbar + BB1000" },
               { src: "./image/3m-ebo-module.png", text: isZH ? "3M EBO 光模块" : "3M EBO Optical Module" }
            ].map((img, i) => (
               <div key={i} className="group relative aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                     {img.text}
                  </div>
                  <img 
                     src={img.src}
                     alt={img.text}
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     onError={(e) => e.currentTarget.style.opacity = '0'}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <span className="text-white text-sm font-bold">{img.text}</span>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#333333] text-white py-24 border-t-8 border-[#FF0000]">
         <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">
                  {isZH ? "技术合作与联合方案对接" : "Technical Cooperation & Alignment"}
               </h2>
               <p className="text-gray-300 max-w-2xl mx-auto">
                  {isZH 
                    ? "适用于服务器厂商、整机柜集成商、3M 渠道伙伴以及新加坡 / 东南亚数据中心业主。" 
                    : "For server vendors, rack integrators, 3M channel partners and DC owners in Singapore / SE Asia."}
               </p>
            </div>

            <div className="bg-white text-[#333333] rounded-sm p-8 md:p-12 shadow-2xl">
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">{isZH ? "姓名 / 公司" : "Name / Company"}</label>
                        <input className="w-full bg-gray-50 border-b-2 border-gray-200 px-3 py-3 outline-none focus:border-[#FF0000] transition-colors" placeholder={isZH ? "如：张三 · 某服务器厂" : "e.g. Alex · Server Vendor"} />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">{isZH ? "邮箱" : "Email"}</label>
                        <input className="w-full bg-gray-50 border-b-2 border-gray-200 px-3 py-3 outline-none focus:border-[#FF0000] transition-colors" placeholder="you@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">{isZH ? "合作意向" : "Cooperation Interest"}</label>
                     <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 px-3 py-3 outline-none focus:border-[#FF0000] transition-colors" 
                       placeholder={isZH ? "简要说明你的角色以及希望合作的方向（如 PoC、联合设计、区域代理等）。" : "Briefly describe your role and desired cooperation (PoC, co-design, etc.)."}
                     ></textarea>
                  </div>
                  <button className="w-full bg-[#FF0000] hover:bg-[#d40000] text-white font-bold py-4 rounded-sm text-[15px] uppercase tracking-wide transition-colors shadow-sm">
                     {isZH ? "提交合作意向" : "Submit Interest"}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                     {isZH ? "当前表单仅为前端示意。" : "This form is a front-end mock."}
                  </p>
               </form>
               
               <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-center border-t border-gray-100 pt-8">
                  <div className="flex flex-col items-center gap-2">
                     <Mail className="w-5 h-5 text-[#FF0000]" />
                     <span className="font-bold text-[#333333]">info@dcdeeptech.com</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-5 h-5 flex items-center justify-center font-bold text-[#FF0000]">W</div>
                     <span className="font-bold text-[#333333]">+65 8378 5068</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <Globe className="w-5 h-5 text-[#FF0000]" />
                     <span className="font-bold text-[#333333]">dcdeeptech.com</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t border-gray-800 text-xs">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
               <span className="font-bold text-white text-lg">DCDT</span>
               <span className="border-l border-gray-600 pl-4">Science. Applied to Data Centers.</span>
            </div>
            <div className="flex gap-6">
               <span>© {new Date().getFullYear()} DCDeepTech. {isZH ? "保留所有权利。" : "All rights reserved."}</span>
               <a href="#" className="hover:text-white transition-colors">{isZH ? "隐私政策" : "Privacy Policy"}</a>
               <a href="#" className="hover:text-white transition-colors">{isZH ? "使用条款" : "Terms of Use"}</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
