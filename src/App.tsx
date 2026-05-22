import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import LeadForm, { LeadFormRef } from "./components/LeadForm";
import Footer from "./components/Footer";
import ChatFAB from "./components/ChatFAB";
import SectionCallToAction from "./components/SectionCallToAction";

export default function App() {
  const formRef = useRef<LeadFormRef>(null);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleScrollToAudit = () => {
    formRef.current?.scrollIntoViewAndPrefill("Yêu cầu tư vấn Audit & Phân tích tối ưu hóa Fanpage SME.");
  };

  const handleScrollToPlan = () => {
    formRef.current?.scrollIntoViewAndPrefill("Mong muốn nhận lộ trình phát triển chi tiết miễn phí từ chuyên gia ViSocial.");
  };

  const handleSelectPricingPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    formRef.current?.scrollIntoViewAndPrefill(planTitle);
  };

  const handleScrollToCustomConsult = (context: string) => {
    formRef.current?.scrollIntoViewAndPrefill(`Tôi muốn đăng ký nhận cuộc gọi tư vấn miễn phí 1-1 về: ${context}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 overflow-x-hidden">
      {/* Header element overlay */}
      <Header onAuditClick={handleScrollToAudit} />

      <main className="flex-grow pt-0">
        {/* Dynamic Marketing Sections */}
        <Hero onAuditClick={handleScrollToAudit} onPlanClick={handleScrollToPlan} />
        
        <Problems />
        <SectionCallToAction 
          badge="Khắc phục tồn đọng"
          title="Biến thách thức thành cơ hội: Nhận ngay bản thảo chẩn đoán lỗi tiếp cận Fanpage của bạn"
          theme="light"
          onClick={() => handleScrollToCustomConsult("Suy giảm tương tác, reach thấp của Fanpage")}
        />
        
        <Solutions />
        <SectionCallToAction 
          badge="Hệ thống phễu marketing"
          title="Sẵn sàng tiếp cận & nhân đôi tỷ lệ chốt đơn tự động với kịch bản phễu chuẩn?"
          theme="navy"
          onClick={() => handleScrollToCustomConsult("Thiết kế mô hình phễu 3 bước chuyển đổi Fanpage")}
        />
        
        <Services />
        <SectionCallToAction 
          badge="Thiết kế combo giải pháp"
          title="Bắt đầu chuẩn hóa hình ảnh & nội dung với hệ sinh thái giải pháp trọn gói chuyên nghiệp"
          theme="light"
          onClick={() => handleScrollToCustomConsult("Combo dịch vụ quản trị chuẩn SEO và seeding Fanpage")}
        />
        
        <Process />
        <SectionCallToAction 
          badge="Triển khai 5 bước"
          title="Lập lộ trình 30 ngày hoàn hảo: Thiết lập hệ thống vận hành Fanpage phát triển bền vững"
          theme="orange"
          onClick={() => handleScrollToCustomConsult("Quy trình 5 bước tư vấn tối ưu hóa Fanpage trong 30 ngày")}
        />
        
        <CaseStudies />
        <SectionCallToAction 
          badge="Ứng dụng thực chiến"
          title="Trở thành câu chuyện thành công tiếp theo! Nhận đo lường tối ưu từ sản phẩm thành công cùng ngành"
          theme="light"
          onClick={() => handleScrollToCustomConsult("Phân tích case-study thiết thực tương tự lĩnh vực kinh doanh")}
        />
        
        <Pricing onSelectPlan={handleSelectPricingPlan} />
        <SectionCallToAction 
          badge="Tối ưu ngân sách"
          title="Chưa tìm thấy gói hoàn hảo cho quy mô hiện tại? Liên hệ chuyên gia để tùy biến dịch vụ phù hợp nhất"
          theme="navy"
          onClick={() => handleScrollToCustomConsult("Tùy biến gói ngân sách và dịch vụ riêng")}
        />
        
        <FAQ />
        <SectionCallToAction 
          badge="Giải đáp trực tiếp"
          title="Vẫn còn thắc mắc về điều khoản dịch vụ? Hãy trò chuyện trực tiếp để tháo gỡ cùng cố vấn chuyên sâu"
          theme="light"
          onClick={() => handleScrollToCustomConsult("Giải đáp thắc mắc thêm về quy trình và tối ưu hóa")}
        />
        
        <LeadForm ref={formRef} selectedPlanTitle={selectedPlan} />
      </main>

      {/* Universal Footer and Support Chat FAB */}
      <Footer />
      <ChatFAB />
    </div>
  );
}
