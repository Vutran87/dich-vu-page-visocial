import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { ShieldCheck, UserCheck, Loader, BarChart, FileText, CheckCircle, Smartphone, AlertTriangle, ArrowRight, RefreshCw, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LeadFormProps {
  selectedPlanTitle: string;
}

export interface LeadFormRef {
  scrollIntoViewAndPrefill: (planTitle: string) => void;
}

const LeadForm = forwardRef<LeadFormRef, LeadFormProps>(({ selectedPlanTitle }, ref) => {
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    fanpageUrl: "",
    industry: "",
    budget: "",
    objective: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progressText, setProgressText] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [reportData, setReportData] = useState<any>(null);

  useImperativeHandle(ref, () => ({
    scrollIntoViewAndPrefill: (planTitle: string) => {
      setFormData((prev) => ({
        ...prev,
        objective: `Tôi muốn tìm hiểu và đăng ký tư vấn cho gói dịch vụ: ${planTitle}.`
      }));
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }));

  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+ ]{9,12}$/.test(formData.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ (9-12 chữ số)";
    }
    if (!formData.fanpageUrl.trim()) {
      newErrors.fanpageUrl = "Vui lòng cung cấp đường dẫn Fanpage";
    } else if (!formData.fanpageUrl.includes("facebook.com") && !formData.fanpageUrl.includes("fb.com")) {
      newErrors.fanpageUrl = "Link nên chứa facebook.com hoặc fb.com";
    }
    if (!formData.industry) newErrors.industry = "Chọn lĩnh vực kinh doanh";
    if (!formData.budget) newErrors.budget = "Chọn ngân sách dự kiến";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Multi-phase audit simulation report generation
    const stages = [
      "Đang kết nối API bảo mật xã hội...",
      "Đang tải siêu dữ liệu từ Link Fanpage...",
      "Kiểm tra chất lượng tối ưu hoá cấu trúc SEO...",
      "Phân tích tần suất biên tập tuyến nội dung mới nhất...",
      "Kiểm tra tính phản hồi và kịch bản chatbot...",
      "Đang lập báo cáo điểm số chi tiết cho chuyên gia..."
    ];

    let currentStage = 0;
    setProgressText(stages[0]);

    const timer = setInterval(() => {
      currentStage += 1;
      if (currentStage < stages.length) {
        setProgressText(stages[currentStage]);
      } else {
        clearInterval(timer);
        // Build customized simulation report sheet
        const randomScore1 = Math.floor(Math.random() * 20) + 35; // 35-55 SEO
        const randomScore2 = Math.floor(Math.random() * 25) + 40; // 40-65 CONT
        const randomScore3 = Math.floor(Math.random() * 15) + 20; // 20-35 CONV
        const average = Math.floor((randomScore1 + randomScore2 + randomScore3) / 3);

        const customReport = {
          fullname: formData.fullname,
          fanpageUrl: formData.fanpageUrl,
          industryName:
            formData.industry === "cosmetics"
              ? "Mỹ phẩm & Làm đẹp"
              : formData.industry === "education"
              ? "Giáo dục & Đào tạo"
              : formData.industry === "fnb"
              ? "Ẩm thực & Nhà hàng"
              : "Công nghệ / Khác",
          budget: formData.budget,
          seoScore: randomScore1,
          contentScore: randomScore2,
          convScore: randomScore3,
          overall: average,
          health: average < 45 ? "Nguy Kịch (Báo Động Đỏ)" : "Yếu (Cần Tối Ưu Gấp)",
          recommendations: [
            "Cần chỉnh sửa phần mô tả trang và cập nhật thẻ meta chuẩn SEO chứa từ khóa danh mục ngành.",
            "Tăng cường sản xuất Reels ngắn chuẩn kịch bản chia sẻ giá trị thực thay vì đăng ảnh chết.",
            "Cấu hình kịch bản Chatbot phân luồng khách hàng tự động để giảm thời gian phản hồi dưới 30s."
          ]
        };

        setReportData(customReport);
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullname: "",
      phone: "",
      fanpageUrl: "",
      industry: "",
      budget: "",
      objective: ""
    });
    setReportData(null);
    setSubmitSuccess(false);
    setErrors({});
  };

  return (
    <section ref={formSectionRef} className="py-24 px-6 bg-brand-blue relative overflow-hidden" id="contact">
      {/* Visual glowing layout elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-display inline-block">
                TƯ VẤN AUDIT MIỄN PHÍ
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue leading-[1.25]">
                Bạn muốn biết Fanpage của mình đang yếu ở đâu?
              </h2>
              <div className="w-12 h-1 bg-brand-orange rounded-full"></div>
            </div>

            <p className="font-sans text-brand-text-muted text-sm sm:text-base leading-relaxed">
              Hãy cung cấp thông tin liên hệ và link trang của bạn dưới đây. Đội ngũ kỹ thuật viên cao cấp từ ViSocial sẽ phân tích, lập biểu phí kiểm thử và gửi bạn lộ trình định hướng trực tiếp miễn phí trong 24 giờ.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4 bg-brand-bg-light/50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-blue text-sm">Báo cáo bảo mật 100%</h4>
                  <p className="text-xs font-sans text-brand-text-muted">Chúng tôi hoàn toàn không chia sẻ dữ liệu kinh doanh của bạn</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-brand-bg-light/50 p-4 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-blue text-sm">Tư vấn 1:1 cùng chuyên gia</h4>
                  <p className="text-xs font-sans text-brand-text-muted">Lịch họp zoom tối ưu bài toán chi tiêu Ads thực tế</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form or Custom Simulation Result panel */}
          <div className="lg:col-span-7 bg-white relative w-full">
            <AnimatePresence mode="wait">
              {/* Submission loading indicator */}
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-brand-bg-light/30 border border-gray-100 rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-6 min-h-[400px]"
                >
                  <Loader className="w-12 h-12 text-brand-orange animate-spin" />
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-brand-blue">
                      Hệ thống đang kiểm soát dữ liệu...
                    </h3>
                    <p className="font-mono text-xs text-brand-orange">
                      {progressText}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Instant Simulated Audit Result Report Screen */}
              {submitSuccess && reportData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border-2 border-brand-orange/35 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-xl"
                >
                  <div className="flex items-center justify-between border-b pb-4 border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                      <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest">
                        BÁO CÁO KIỂM THỬ TỨC THÌ (PREVIEW)
                      </span>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-xs text-brand-blue hover:text-brand-orange font-bold font-sans cursor-pointer flex items-center gap-1 border border-brand-blue/20 rounded-md px-2 py-1 bg-gray-50 hover:bg-gray-100"
                    >
                      <RefreshCw className="w-3 h-3" /> Audit Lại Trang Khác
                    </button>
                  </div>

                  {/* Header audit values */}
                  <div className="space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-blue">
                      Báo Cáo Sức Khỏe Fanpage: {reportData.fullname}
                    </h3>
                    <p className="text-xs font-sans text-brand-text-muted truncate">
                      Link trang: <a href={reportData.fanpageUrl} target="_blank" rel="noreferrer" className="text-brand-blue underline">{reportData.fanpageUrl}</a>
                    </p>
                  </div>

                  {/* Metric Circle display */}
                  <div className="bg-brand-bg-light/40 border border-gray-100 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="text-[10px] text-brand-text-muted uppercase font-bold sm:block">Trạng thái tổng quan</span>
                      <span className="text-base font-bold text-red-500 font-display sm:block block">
                        {reportData.health}
                      </span>
                      <span className="text-xs font-sans text-gray-500 block">Lĩnh vực: {reportData.industryName} | Ngân sách: {reportData.budget}</span>
                    </div>
                    {/* Big Score counter */}
                    <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-xl shadow-sm">
                      <BarChart className="w-6 h-6 text-brand-orange" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 font-mono block">Thăng điểm</span>
                        <span className="text-xl font-bold text-brand-blue font-display">
                          {reportData.overall} / 100
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sub breakdown meters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5">
                      <span className="text-xs font-bold text-brand-blue">1. Điểm Chuẩn SEO</span>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${reportData.seoScore}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>Thiếu từ khóa</span>
                        <span className="text-red-500 font-bold">{reportData.seoScore}/100</span>
                      </div>
                    </div>

                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5">
                      <span className="text-xs font-bold text-brand-blue">2. Điểm Content</span>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${reportData.contentScore}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>Thiếu Video ngắn</span>
                        <span className="text-yellow-500 font-bold">{reportData.contentScore}/100</span>
                      </div>
                    </div>

                    <div className="border border-gray-100 p-4 rounded-xl space-y-1.5">
                      <span className="text-xs font-bold text-brand-blue">3. Điểm Chuyển Đổi</span>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: `${reportData.convScore}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>Chatbot cơ bản</span>
                        <span className="text-red-600 font-bold">{reportData.convScore}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-3 bg-red-50/50 border border-red-100 p-5 rounded-2xl">
                    <h4 className="text-xs font-bold text-red-500 font-display uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" /> ĐỀ XUẤT CỦA KỸ THUẬT VIÊN:
                    </h4>
                    <ul className="space-y-2.5">
                      {reportData.recommendations.map((rec: string) => (
                        <li key={rec} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-brand-navy">
                          <CheckCircle className="w-4 h-4 text-brand-success shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-brand-orange/5 border border-brand-orange/20 rounded-xl flex items-center justify-between gap-4">
                    <span className="text-xs font-sans text-brand-navy leading-normal">
                      <strong>Chúc mừng!</strong> Thông tin chi tiết của bạn đã được chuyển tới Trưởng nhóm Tư vấn. Một lộ trình tối ưu hoá đầy đủ cùng Slide thiết kế mẫu sẽ được gửi miễn phí qua Zalo của quý anh/chị.
                    </span>
                    <Sparkles className="w-8 h-8 text-brand-orange shrink-0 animate-bounce" />
                  </div>
                </motion.div>
              )}

              {/* Standard Lead Form inputs block */}
              {!isSubmitting && !submitSuccess && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4 w-full"
                >
                  {/* Name and phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue font-display">Họ và tên</label>
                      <input
                        placeholder="Họ và tên của bạn"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm ${
                          errors.fullname ? "border-red-500 bg-red-50/35" : "border-gray-200"
                        }`}
                        type="text"
                      />
                      {errors.fullname && <p className="text-red-500 text-[10px] font-sans">{errors.fullname}</p>}
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue font-display">Số điện thoại / Zalo</label>
                      <input
                        placeholder="Ví dụ: 0987654321"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm ${
                          errors.phone ? "border-red-500 bg-red-50/35" : "border-gray-200"
                        }`}
                        type="tel"
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] font-sans">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Fanpage link */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-brand-blue font-display">Đường dẫn Fanpage cần Audit</label>
                    <input
                      placeholder="https://facebook.com/trang-cua-ban"
                      name="fanpageUrl"
                      value={formData.fanpageUrl}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm ${
                        errors.fanpageUrl ? "border-red-500 bg-red-50/35" : "border-gray-200"
                      }`}
                      type="text"
                    />
                    {errors.fanpageUrl && <p className="text-red-500 text-[10px] font-sans">{errors.fanpageUrl}</p>}
                  </div>

                  {/* Industry and budget selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue font-display">Lĩnh vực kinh doanh</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm bg-white ${
                          errors.industry ? "border-red-500 bg-red-50/35" : "border-gray-200"
                        }`}
                      >
                        <option value="">-- Chọn lĩnh vực --</option>
                        <option value="cosmetics">Mỹ phẩm &amp; Làm đẹp</option>
                        <option value="education">Giáo dục &amp; Đào tạo</option>
                        <option value="fnb">Ẩm thực &amp; Nhà hàng</option>
                        <option value="tech">Công nghệ / Start-up</option>
                        <option value="retail">Thời trang / Bán lẻ</option>
                      </select>
                      {errors.industry && <p className="text-red-500 text-[10px] font-sans">{errors.industry}</p>}
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold text-brand-blue font-display">Ngân sách hàng tháng dự kiến</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl border focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm bg-white ${
                          errors.budget ? "border-red-500 bg-red-50/35" : "border-gray-200"
                        }`}
                      >
                        <option value="">-- Chọn ngân sách --</option>
                        <option value="5-10m">5 - 10 Triệu / tháng</option>
                        <option value="10-20m">10 - 20 Triệu / tháng</option>
                        <option value="20m+">Trên 20 Triệu / tháng</option>
                      </select>
                      {errors.budget && <p className="text-red-500 text-[10px] font-sans">{errors.budget}</p>}
                    </div>
                  </div>

                  {/* Objective textarea */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-brand-blue font-display">Mục tiêu của bạn hoặc thắc mắc cần giải đáp</label>
                    <textarea
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none font-sans text-sm"
                      placeholder="Mục tiêu của bạn (Tăng tiếp cận reach, bùng nổ đơn hàng, hay xây dựng nhận diện thương hiệu?)"
                      rows={3}
                    />
                  </div>

                  {/* CTA button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-4 rounded-xl cta-shadow text-base active:scale-[0.98] transition-all cursor-pointer font-display flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Nhận Báo Cáo Audit Miễn Phí Ngay</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
});

LeadForm.displayName = "LeadForm";
export default LeadForm;
