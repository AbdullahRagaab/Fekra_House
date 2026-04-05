/** بيانات المحتوى — سهل التوسعة */

export const navLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من نحن' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'software', label: 'البرمجيات' },
  { id: 'team', label: 'فريقنا' },
  { id: 'contact', label: 'تواصل معنا' },
]

export const heroWords = [
  { text: 'تعاونية', className: 'text-[#6b705c]' },
  { text: 'مبتكرة', className: 'text-[#1e3a5f]' },
  { text: 'عالية الجودة', className: 'text-neutral-900' },
  { text: 'إنسانية', className: 'text-[#ef6b5b]' },
  { text: 'ملهمة', className: 'text-[#c9a227]' },
  { text: 'إبداعية', className: 'text-[#0d9488]' },
  { text: 'تقنية', className: 'text-[#4338ca]' },
  { text: 'احترافية', className: 'text-[#b45309]' },
]

// export const partners = [
//   '../assets/Clients/ChatGPT Image Mar 26, 2026, 01_55_25 AM 1.png',
//   '../assets/Clients/image 3.png',
//   '../assets/Clients/image 4.png',
//   '../assets/Clients/image 7.png',
//   '../assets/Clients/image 8.png',
//   '../assets/Clients/image 10.png',
//   '../assets/Clients/image 11.png',
//   '../assets/Clients/image 12.png',
//   '../assets/Clients/image 14.png',
//   '../assets/Clients/image 16.png',
//   '../assets/Clients/image 17.png',
//   '../assets/Clients/image 18.png',
//   '../assets/Clients/image 19.png',
//   '../assets/Clients/image 20.png',
//   '../assets/Clients/image 21.png',
//   '../assets/Clients/image_2-removebg-preview 1.png',
//   '../assets/Clients/image_13-removebg-preview 1.png',
//   '../assets/Clients/image_15-removebg-preview 1.png',
//   '../assets/Clients/image_22-1-removebg-preview 1.png',
//   '../assets/Clients/image_22-2-removebg-preview 1.png',
//   '../assets/Clients/image_22-removebg-preview 1.png',

// ]

// data/content.js

// export const partners = Object.values(
//   import.meta.glob('../assets/Clients/*.{png,jpg,jpeg,svg}', {
//     eager: true,
//     as: 'url',
//   })
// );
import ChatGPTImg from '../assets/Clients/ChatGPTImage.png'
import img10 from '../assets/Clients/image10.png'
import img11 from '../assets/Clients/image11.png'
import img12 from '../assets/Clients/image12.png'
import img14 from '../assets/Clients/image14.png'
import img16 from '../assets/Clients/image16.png'
import img17 from '../assets/Clients/image17.png'
import img18 from '../assets/Clients/image18.png'
import img19 from '../assets/Clients/image19.png'
import img20 from '../assets/Clients/image20.png'
import img21 from '../assets/Clients/image21.png'
import img3 from '../assets/Clients/image3.png'
import img4 from '../assets/Clients/image4.png'
import img7 from '../assets/Clients/image7.png'
import img8 from '../assets/Clients/image8.png'
import img_13 from '../assets/Clients/image_13.png'
import img_15 from '../assets/Clients/image_15.png'
import img_2 from '../assets/Clients/image_2.png'
import img_22 from '../assets/Clients/image_22.png'
import img_5 from '../assets/Clients/image_5.png'
import img_6 from '../assets/Clients/image_6.png'

// إصلاح المسارات بإزالة /src من البداية
const fixPath = (path) => path.replace(/^\/src\//, '/')

export const partners = [
  fixPath(ChatGPTImg), fixPath(img10), fixPath(img11), fixPath(img12), fixPath(img14), fixPath(img16), 
  fixPath(img17), fixPath(img18), fixPath(img19), fixPath(img20),
  fixPath(img21), fixPath(img3), fixPath(img4), fixPath(img7), fixPath(img8), 
  fixPath(img_13), fixPath(img_15), fixPath(img_2), fixPath(img_22), fixPath(img_5), fixPath(img_6)
]

export const innovationServices = [
  {
    title: 'تدريب Design Thinking',
    desc: 'برامج تدريبية عملية تساعد فرق العمل على فهم المستخدم وتوليد حلول مبتكرة بمنهجية منظمة.',
    icon: 'brain',
  },
  {
    title: 'ورش الإبداع وتوليد الأفكار',
    desc: 'جلسات تفاعلية لتوليد أفكار جديدة، تحليل الفرص، وبناء مسارات تنفيذ واضحة.',
    icon: 'sparkles',
  },
  {
    title: 'برامج تطوير الألعاب الابتكارية',
    desc: 'تعلم مبادئ تصميم الألعاب والبرمجة الإبداعية لتحويل الأفكار إلى تجارب تفاعلية.',
    icon: 'gamepad2',
  },
  {
    title: 'معسكرات وورش Ideation',
    desc: 'معسكرات مكثفة لصقل الفكرة، بناء النماذج الأولية، واختبارها مع المستخدمين.',
    icon: 'clipboardList',
  },
  {
    title: 'ورش الـ Prototyping',
    desc: 'تحويل المفاهيم إلى نماذج قابلة للاختبار بسرعة باستخدام أدوات حديثة.',
    icon: 'layoutTemplate',
  },
  {
    title: 'بناء الهوية التجارية',
    desc: 'تعريف الرسالة والقيم والشخصية البصرية لتقديم صورة متسقة لعلامتك.',
    icon: 'award',
  },
  {
    title: 'التسويق الرقمي',
    desc: 'استراتيجيات محتوى وحملات إعلانية وقياس أداء لزيادة الوصول والتحويل.',
    icon: 'trendingUp',
  },
  {
    title: 'ورش عمل تفاعلية',
    desc: 'أنشطة جماعية لتعزيز التعاون، حل المشكلات، وتوليد حلول سريعة.',
    icon: 'users',
  },
  {
    title: 'الابتكار المؤسسي',
    desc: 'برامج لبناء ثقافة الابتكار داخل المؤسسات وربطها بأهداف الأعمال.',
    icon: 'building2',
  },
  {
    title: 'الاستشارات الاستراتيجية',
    desc: 'دعم في رسم خارطة طريق للمنتجات والخدمات الرقمية والنمو.',
    icon: 'compass',
  },
  {
    title: 'تصميم تجربة العملاء',
    desc: 'رحلات مستخدم واضحة وقياس رضا لتحسين التفاعل مع علامتك.',
    icon: 'smile',
  },
  {
    title: 'برامج ريادة الأعمال',
    desc: 'توجيه رواد الأعمال من الفكرة إلى نموذج العمل والتمويل.',
    icon: 'rocket',
  },
]

export const softwareServices = [
  {
    title: 'تطوير الأنظمة ولوحات التحكم',
    desc: 'أنظمة إدارة داخلية ولوحات تحكم لمتابعة العمليات والمؤشرات في الوقت الفعلي.',
    icon: 'monitor',
  },
  {
    title: 'تطوير تطبيقات الموبايل',
    desc: 'تطبيقات iOS و Android بأداء عالٍ وتجربة استخدام متناسقة مع علامتك.',
    icon: 'smartphone',
  },
  {
    title: 'التصميم الجرافيكي والهوية البصرية',
    desc: 'شعارات، أدلة هوية، ومواد تسويقية تعكس احترافية نشاطك.',
    icon: 'palette',
  },
  {
    title: 'تطوير المواقع الإلكترونية',
    desc: 'مواقع تعريفية وتجارة إلكترونية سريعة وآمنة ومتوافقة مع محركات البحث.',
    icon: 'globe',
  },
  {
    title: 'تصميم واجهات وتجربة المستخدم UI/UX',
    desc: 'بحث مستخدم، وايرفريم، وتصاميم واجهات سهلة وجذابة.',
    icon: 'layers',
  },
  {
    title: 'تحليل البيانات والأداء',
    desc: 'لوحات بيانات وتقارير لدعم القرار بناءً على مؤشرات واضحة.',
    icon: 'barChart3',
  },
  {
    title: 'تطوير حلول الذكاء الاصطناعي',
    desc: 'دمج نماذج ذكاء اصطناعي في منتجاتك لأتمتة المهام وتحسين التجربة.',
    icon: 'cpu',
  },
  {
    title: 'برمجة الأنظمة السحابية',
    desc: 'بنية سحابية قابلة للتوسع، نشر آمن، ومراقبة مستمرة.',
    icon: 'cloud',
  },
  {
    title: 'إدارة المشاريع البرمجية',
    desc: 'تخطيط، تتبع، وتسليم مشاريع تقنية وفق أفضل الممارسات.',
    icon: 'kanban',
  },
  {
    title: 'إنتاج الفيديو والمحتوى المرئي',
    desc: 'فيديوهات تعريفية وموشن جرافيك لدعم حملاتك الرقمية.',
    icon: 'video',
  },
]

export const teamMembers = [
  {
    name: 'على أحمد',
    role: 'الرئيس التنفيذي',
    bg: 'bg-[#fde68a]',
    accent: 'bg-[#fbbf24]',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'سارة منصور',
    role: 'المدير المالي',
    bg: 'bg-[#f1665c]',
    accent: 'bg-[#fbbf24]',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'كريم عادل',
    role: 'مدير التطوير',
    bg: 'bg-[#8b9474]',
    accent: 'bg-[#f1665c]',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  },
]
