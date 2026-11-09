/**
 * RoadXpert Technology (RoadX Egypt) — Bilingual Configuration & Content Repository
 * Supports English ('en', default LTR) and Arabic ('ar', RTL) across all 14 sections and expansion pages.
 */

export type Language = 'en' | 'ar';
export type PageView = 'home' | 'about' | 'business' | 'privacy' | 'terms' | 'support';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  page?: PageView;
}

export interface SafetyFeatureItem {
  id: 'dashcam' | 'drowsiness' | 'danger';
  index: string;
  title: string;
  subtitle: string;
  description: string;
  technicalNote: string;
  capabilities: string[];
}

export interface RoadsideServiceItem {
  id: 'winch' | 'mechanic' | 'tires' | 'electrician';
  index: string;
  title: string;
  accessMode: 'direct_or_directory' | 'directory_and_request';
  accessLabel: string;
  description: string;
  useCases: string[];
}

export interface FaqItem {
  id: string;
  category: 'general' | 'safety' | 'services' | 'business' | 'plans';
  categoryLabel: string;
  question: string;
  answer: string;
  verificationNote?: string;
}

export const BRAND_ASSETS = {
  logoSquare: './assets/aistudio/RX_logo_square_c5f2dfff.png',
  brandName: 'RoadX',
  companyName: 'RoadXpert Technology',
  businessBrandName: 'RoadX Business',
  tagline: 'RoadX — Safer on the Road, Closer to Services.',
  taglineAr: 'RoadX — أمان أكثر، وخدمات أقرب.',
  market: 'Egypt',
  palette: {
    primaryBlue: '#0052CC',
    brightBlue: '#0075FF',
    carbonBlack: '#111317',
    dangerCrimson: '#DC2626',
  },
} as const;

export const COMPANY_LEGAL_INFO = {
  legalName: 'RoadXpert Technology',
  addressLine1:
    'القاهرة – مدينة نصر – مكتب رقم ٢٦–١٤٣، داخل المقر ٣ الدور ١، ١٣ شارع أفريقيا – ميدان مصطفى النحاس – ١١١.',
  addressLine2: 'مدينة نصر, cairo 4442542، مصر',
  addressLine1En:
    'Cairo – Nasr City – Office No. 26–143, Inside Premises 3, Floor 1, 13 Africa St. – Mostafa El-Nahas Sq. – 111.',
  addressLine2En: 'Nasr City, Cairo 4442542, Egypt',
  fullAddress:
    'القاهرة – مدينة نصر – مكتب رقم ٢٦–١٤٣، داخل المقر ٣ الدور ١، ١٣ شارع أفريقيا – ميدان مصطفى النحاس – ١١١. مدينة نصر, cairo 4442542، مصر',
  fullAddressEn:
    'Cairo – Nasr City – Office No. 26–143, Inside Premises 3, Floor 1, 13 Africa St. – Mostafa El-Nahas Sq. – 111. Nasr City, Cairo 4442542, Egypt',
  phone: '+201555132998',
  phoneHref: 'tel:+201555132998',
  website: 'https://roadxpert.tech/',
  websiteDisplay: 'roadxpert.tech',
  taxId: '775173908',
} as const;

export const LAUNCH_CONFIG = {
  googlePlayClientUrl: '',
  googlePlayBusinessUrl: '',
  appleAppStoreUrl: '',
  iosStatusText:
    'يتم حاليًا التركيز على إتاحة التجربة وفق الإصدارات المعتمدة، وسيتم الإعلان عن حالة دعم iPhone (iOS) فور اعتماد النسخة الرسمية قبل النشر النهائي.',
  iosStatusTextEn:
    'Current availability follows our verified release rollout. Official iPhone (iOS) App Store availability will be announced once the iOS release is finalized prior to launch.',
  pricingStatusText:
    'تفاصيل الباقات والمزايا المجانية أو المدفوعة (مثل سعة الحفظ السحابي الإضافية) تخضع للبيانات المعتمدة عند الإطلاق الرسمي داخل التطبيق.',
  pricingStatusTextEn:
    'Plan details and free vs. paid tier capabilities (such as extended cloud backup storage) are subject to the official verified pricing schedule inside the app at launch.',
  contact: {
    supportEmail: 'يُستكمل قبل النشر (مثال: support@roadxpert.tech)',
    supportEmailEn: 'To be finalized before launch (e.g., support@roadxpert.tech)',
    businessEmail: 'يُستكمل قبل النشر (مثال: business@roadxpert.tech)',
    businessEmailEn: 'To be finalized before launch (e.g., business@roadxpert.tech)',
    officialPhone: COMPANY_LEGAL_INFO.phone,
    headquarters: COMPANY_LEGAL_INFO.fullAddress,
    headquartersEn: COMPANY_LEGAL_INFO.fullAddressEn,
  },
  missingDataChecklist: [
    'روابط المتاجر الرسمية (Google Play لتطبيق RoadX وتطبيق RoadX Business).',
    'تأكيد حالة توافر نسخة iOS (App Store) وموعد إتاحتها الرسمي.',
    'جدول الباقات والاشتراكات النهائي وحدود الاستخدام المجاني والسحابي.',
    'البريد الإلكتروني الرسمي المخصص للدعم الفني وانضمام الأعمال.',
    'روابط الحسابات الرسمية الموثقة على منصات التواصل الاجتماعي.',
    'قائمة المنتجات والعروض الفعلية داخل قسم المتجر (Store & Offers) عند تفعيله.',
  ],
  missingDataChecklistEn: [
    'Official store URLs (Google Play links for the RoadX client app and RoadX Business app).',
    'Confirmation of iOS (App Store) availability status and official release timeline.',
    'Final subscription and pricing tiers, including free usage and cloud storage limits.',
    'Official dedicated email addresses for customer support and business onboarding.',
    'Verified official social media profile URLs (Facebook, Instagram, LinkedIn).',
    'Actual product catalog and offers inside the Store & Offers section upon activation.',
  ],
} as const;

export const NAVBAR_LINKS_BY_LANG: Record<Language, NavItem[]> = {
  en: [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About RoadX', href: '#about' },
    { id: 'safety', label: 'Features', href: '#safety' },
    { id: 'services', label: 'Roadside Services', href: '#services' },
    { id: 'business', label: 'For Providers', href: '#business' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
  ],
  ar: [
    { id: 'hero', label: 'الرئيسية', href: '#hero' },
    { id: 'about', label: 'عن RoadX', href: '#about' },
    { id: 'safety', label: 'المميزات', href: '#safety' },
    { id: 'services', label: 'خدمات الطريق', href: '#services' },
    { id: 'business', label: 'للمقدمين', href: '#business' },
    { id: 'faq', label: 'الأسئلة الشائعة', href: '#faq' },
    { id: 'contact', label: 'تواصل معنا', href: '#contact' },
  ],
};

export const NAVBAR_LINKS = NAVBAR_LINKS_BY_LANG.ar;

export const HERO_CONTENT_BY_LANG = {
  en: {
    kicker: 'Smart Driving Safety & Car Services Ecosystem · Egypt',
    headlineLine1: 'Safer on the Road.',
    headlineLine2: 'Closer to Services When You Need Them.',
    description:
      'With RoadX, your smartphone becomes your intelligent driving companion. Record your trips, monitor AI drowsiness alerts, activate Danger Mode when needed, and access essential car services from one unified platform.',
    primaryCta: 'Download RoadX',
    secondaryCta: 'Explore Features',
    interactivePrompt: 'Click any capability below to preview its interface on the phone:',
    highlights: {
      dashcam: 'Dashcam Trip Recording with Loop Recording',
      drowsiness: 'AI Drowsiness & Attention Assistance Alerts',
      danger: 'Danger Mode for Incident Documentation & Alerts',
      services: 'Winch, Mechanic, Tires & Auto Electrician Access',
    },
  },
  ar: {
    kicker: 'منظومة القيادة الآمنة وخدمات السيارات · مصر',
    headlineLine1: 'أمان أكتر على الطريق.',
    headlineLine2: 'وخدمات أقرب وقت ما تحتاجها.',
    description:
      'مع RoadX، موبايلك يبقى مساعدك الذكي أثناء القيادة. سجل رحلتك، تابع تنبيهات النعاس، استخدم وضع الخطر عند الحاجة، واكتشف خدمات السيارات من مكان واحد.',
    primaryCta: 'حمّل RoadX',
    secondaryCta: 'اكتشف المميزات',
    interactivePrompt: 'اضغط لاستعراض وظائف التطبيق داخل شاشة المعاينة:',
    highlights: {
      dashcam: 'تسجيل الطريق Dashcam مع Loop Recording',
      drowsiness: 'تنبيهات المساعدة عند علامات النعاس بالـ AI',
      danger: 'وضع الخطر لتوثيق المواقف ومشاركة التنبيهات',
      services: 'الوصول لخدمات الونش والميكانيكا والكاوتش والكهرباء',
    },
  },
} as const;

export const HERO_CONTENT = HERO_CONTENT_BY_LANG.ar;

export const ABOUT_CONTENT_BY_LANG = {
  en: {
    kicker: 'About the Ecosystem · Vision & Core Pillars',
    title: 'RoadX is More Than Just a Car App.',
    lead: 'Developed by RoadXpert Technology, RoadX is an integrated automotive technology ecosystem connecting everyday driving safety with real-world vehicle needs on Egyptian roads—bringing drivers and service providers together in one clear digital experience.',
    visionTitle: 'Our Vision on the Road',
    visionBody:
      'We aim to make every journey safer, better organized, and more accessible by turning the smartphone into a practical tool for trip documentation and driver alertness, while reducing the time and friction required to reach essential roadside and car services.',
    pillarFooter: 'Core pillar of the RoadX ecosystem in Egypt',
    pillars: [
      {
        index: '01.',
        title: 'Driver Safety Assistance',
        subtitle: 'AI & Emergency Support',
        description:
          'Smart assistive tools during driving, including camera-based AI drowsiness and inattention monitoring, plus Danger Mode to document critical situations and notify user-selected emergency contacts.',
      },
      {
        index: '02.',
        title: 'Trip Documentation',
        subtitle: 'Dashcam & Loop Recording',
        description:
          'Transforms your smartphone camera into a practical Dashcam to record road video during trips, featuring automated storage management via Loop Recording and easy playback of saved journeys.',
      },
      {
        index: '03.',
        title: 'Roadside & Car Services',
        subtitle: 'Connected to RoadX Business',
        description:
          'Connects car owners with Winch recovery, Mechanics, Tire specialists, and Auto Electricians through an ecosystem linked directly with RoadX Business to request or discover nearby services.',
      },
    ],
    legalCard: {
      kicker: 'Official Business Details · Corporate Registration',
      title: 'Verified Business Identity in Egypt',
      legalNameLabel: 'Legal Business Name',
      taxIdLabel: 'Tax ID',
      addressLabel: 'Registered Office Address',
      phoneLabel: 'Business Phone',
      websiteLabel: 'Official Website',
    },
  },
  ar: {
    kicker: 'عن المنظومة · الرؤية والركائز',
    title: 'RoadX مش مجرد تطبيق سيارات.',
    lead: 'RoadX منظومة تقنية متكاملة تربط أمان القيادة اليومي بالاحتياجات الفعلية للسيارة على الطرق المصرية، وتجمع بين السائق ومقدمي الخدمات في بيئة رقمية واحدة واضحة وسهلة الاستخدام.',
    visionTitle: 'رؤيتنا على الطريق',
    visionBody:
      'نسعى إلى جعل تجربة القيادة والطريق أكثر أمانًا وتنظيمًا وسهولة؛ من خلال تحويل الهاتف الذكي إلى أداة مساعدة لتوثيق الرحلات وتنبيه السائق، مع تقليص الوقت والجهد اللازمين للوصول إلى خدمات السيارات الأساسية عند الحاجة.',
    pillarFooter: 'جزء أساسي من منظومة RoadX في مصر',
    pillars: [
      {
        index: '01.',
        title: 'سلامة السائق',
        subtitle: 'Driver Safety Assistance',
        description:
          'أدوات مساعدة ذكية أثناء القيادة تشمل مراقبة علامات النعاس وقلة الانتباه عبر الكاميرا، وتفعيل وضع الخطر لتوثيق المواقف الحرجة ومشاركة التنبيهات مع جهات الطوارئ التي يحددها المستخدم.',
      },
      {
        index: '02.',
        title: 'توثيق الرحلات',
        subtitle: 'Dashcam & Trip Recording',
        description:
          'تحويل كاميرا الهاتف إلى Dashcam عملية لتسجيل الفيديو أثناء الرحلة، مع إدارة تلقائية للمساحة بنظام التسجيل الدوري (Loop Recording) وإمكانية مراجعة التسجيلات المحفوظة بسهولة.',
      },
      {
        index: '03.',
        title: 'خدمات الطريق',
        subtitle: 'Roadside & Car Services',
        description:
          'ربط أصحاب السيارات بمقدمي خدمات الونش، الميكانيكا، الإطارات والكاوتش، وكهرباء السيارات عبر منظومة متصلة بـ RoadX Business لتسهيل طلب الخدمة أو الوصول إليها.',
      },
    ],
    legalCard: {
      kicker: 'البيانات الرسمية والشركة المالكة · Official Business Details',
      title: 'تفاصيل النشاط التجاري المعتمد في مصر',
      legalNameLabel: 'الاسم القانوني للنشاط التجاري',
      taxIdLabel: 'المعرف الضريبي',
      addressLabel: 'العنوان الإداري المعتمد',
      phoneLabel: 'هاتف النشاط التجاري',
      websiteLabel: 'موقع الويب الرسمي',
    },
  },
} as const;

export const ABOUT_CONTENT = ABOUT_CONTENT_BY_LANG.ar;

export const SAFETY_FEATURES_BY_LANG: Record<Language, SafetyFeatureItem[]> = {
  en: [
    {
      id: 'dashcam',
      index: '01.',
      title: 'Dashcam Trip Recording',
      subtitle: 'Dashcam & Loop Recording',
      description:
        'Record road video using your smartphone camera while driving without complex external hardware, complete with intelligent clip segmentation and storage cycle management.',
      technicalNote:
        'Background recording operates subject to operating system permissions and device-specific technical constraints (such as battery optimization policies and device thermal limits).',
      capabilities: [
        'Road video recording with convenient trip playback',
        'Automated storage cycling via Loop Recording',
        'Background operation support subject to device permissions',
      ],
    },
    {
      id: 'drowsiness',
      index: '02.',
      title: 'AI Drowsiness Monitoring',
      subtitle: 'AI Drowsiness Monitoring',
      description:
        'Analyzes facial and eye indicators through the camera to detect signs of drowsiness or reduced attention while driving, issuing audio and visual assistive alerts.',
      technicalNote:
        'An assistive alerting tool dependent on phone mounting angle and lighting conditions; it does not replace driver vigilance or adequate rest.',
      capabilities: [
        'Detects frequent eye closure and fatigue indicators',
        'Immediate in-app visual and audio driver alerts',
        'Designed to assist drivers on long and night journeys',
      ],
    },
    {
      id: 'danger',
      index: '03.',
      title: 'Danger Mode & Emergency',
      subtitle: 'Danger Mode & Cloud Backup',
      description:
        'During critical road situations, Danger Mode enables you to lock and document the active video, trigger alerts to pre-selected emergency contacts, and back up footage to the cloud.',
      technicalNote:
        'Sending alerts and cloud uploads require an active internet connection, granted permissions, and eligible account capabilities. The app does not automatically call police or ambulance.',
      capabilities: [
        'Immediate documentation and protection of active video clips',
        'Alerts sent to user-defined emergency contacts',
        'Cloud backup of recordings subject to connectivity & permissions',
      ],
    },
  ],
  ar: [
    {
      id: 'dashcam',
      index: '01.',
      title: 'تسجيل الرحلات Dashcam',
      subtitle: 'Dashcam & Loop Recording',
      description:
        'سجّل فيديو للطريق باستخدام كاميرا هاتفك أثناء القيادة دون الحاجة لشراء أجهزة إضافية معقدة، مع إدارة ذكية للمقاطع المسجلة ومساحة التخزين.',
      technicalNote:
        'يعمل التسجيل في الخلفية وفق أذونات نظام التشغيل والقيود التقنية الخاصة بكل جهاز (مثل إعدادات البطارية وحرارة الهاتف).',
      capabilities: [
        'تسجيل فيديو للرحلات مع إمكانية المراجعة لاحقًا',
        'إدارة المساحة تلقائيًا بأسلوب Loop Recording',
        'دعم العمل في الخلفية بحسب أذونات الجهاز',
      ],
    },
    {
      id: 'drowsiness',
      index: '02.',
      title: 'مراقبة النعاس بالذكاء الاصطناعي',
      subtitle: 'AI Drowsiness Monitoring',
      description:
        'تعتمد الميزة على تحليل مؤشرات الوجه والعين عبر الكاميرا لرصد علامات النعاس أو تشتت الانتباه أثناء القيادة وإصدار تنبيهات صوتية وبصرية مساعدة للسائق.',
      technicalNote:
        'ميزة مساعدة لتنبيه السائق وتعتمد على زاوية تثبيت الهاتف والإضاءة، ولا تُغني عن يقظة السائق أو أخذ قسط كافٍ من الراحة.',
      capabilities: [
        'رصد مؤشرات إغماض العين المتكرر وعلامات الإرهاق',
        'تنبيهات صوتية وبصرية فورية داخل التطبيق',
        'معالجة مصممة لمساعدة السائق في الرحلات الطويلة والليلية',
      ],
    },
    {
      id: 'danger',
      index: '03.',
      title: 'وضع الخطر والطوارئ',
      subtitle: 'Danger Mode & Cloud Backup',
      description:
        'عند التعرض لموقف طارئ أو خطر على الطريق، يتيح لك وضع الخطر توثيق الموقف، وإرسال تنبيهات لجهات الاتصال المحددة مسبقًا، ورفع التسجيل سحابيًا لحمايته من الفقدان.',
      technicalNote:
        'يتطلب إرسال التنبيهات والحفظ السحابي اتصالًا بالإنترنت وتفعيل الأذونات والباقة المناسبة، ولا يقوم التطبيق بالاتصال التلقائي بالشرطة أو الإسعاف.',
      capabilities: [
        'توثيق فوري للمواقف الخطرة وحماية المقطع المسجل',
        'إشعار جهات الاتصال للطوارئ التي يحددها السائق مسبقًا',
        'نسخ احتياطي سحابي للتسجيلات وفق الاتصال والأذونات',
      ],
    },
  ],
};

export const SAFETY_FEATURES = SAFETY_FEATURES_BY_LANG.ar;

export const SAFETY_DISCLAIMER_BY_LANG: Record<Language, string> = {
  en: 'Important Notice: All safety and alert features in RoadX (including Dashcam, AI Drowsiness Monitoring, and Danger Mode) are assistive technical tools designed to support the driver and document journeys. They are not a substitute for attentive, responsible driving and do not guarantee accident prevention.',
  ar: 'تنبيه مهم: جميع ميزات السلامة والتنبيه في RoadX (بما في ذلك Dashcam، مراقبة النعاس بالذكاء الاصطناعي، ووضع الخطر) هي أدوات تقنية مساعدة لدعم السائق وتوثيق الرحلة، وليست بديلاً عن القيادة اليقظة والمسؤولة ولا تمثل ضمانًا لمنع وقوع الحوادث.',
};

export const SAFETY_DISCLAIMER = SAFETY_DISCLAIMER_BY_LANG.ar;

export const DASHCAM_SHOWCASE_CONTENT_BY_LANG = {
  en: {
    kicker: 'Road Documentation · Dashcam & Loop Recording',
    title: 'Your Smartphone Camera Transformed into an Organized Dashcam.',
    description:
      'Instead of worrying about running out of phone storage or missing key road moments, RoadX provides a structured trip recording system that segments video automatically and supports background recording alongside navigation apps, subject to device permissions.',
    features: [
      {
        title: 'Intelligent Loop Recording',
        body: 'Divides recordings into fixed-duration segments. When allocated storage is full, the oldest unlocked segments are automatically overwritten so recording continues seamlessly.',
      },
      {
        title: 'Background Recording Support',
        body: 'Allows road recording to continue while you view navigation maps or receive calls, provided camera and background permissions are granted and the OS does not terminate the app due to battery savers.',
      },
      {
        title: 'Trip Playback & Clip Protection',
        body: 'Review your Trip Recording log at any time and lock important video segments so they are never overwritten during subsequent loop cycles.',
      },
    ],
    technicalConstraintsTitle: 'Required Permissions & Technical Considerations',
    technicalConstraints: [
      'Requires granting Camera, Microphone (optional), Storage, and Notification permissions.',
      'Background continuity may be affected by manufacturer battery management policies or high device temperatures in hot weather.',
      'Video clarity and field of view depend on your phone camera hardware and dashboard/windshield mounting angle.',
    ],
  },
  ar: {
    kicker: 'توثيق الطريق · Dashcam & Loop Recording',
    title: 'كاميرا موبايلك تتحول إلى Dashcam عملية ومنظمة.',
    description:
      'بدل ما تشغل بالك بمساحة التخزين أو تفوتك لقطة مهمة على الطريق، يوفر RoadX نظام تسجيل رحلات متكامل يدعم التقاط الفيديو وتقسيمه إلى مقاطع منتظمة مع إمكانية استمرار التسجيل في الخلفية أثناء استخدام تطبيقات الملاحة، وفق أذونات الجهاز.',
    features: [
      {
        title: 'التسجيل الدوري الذكي (Loop Recording)',
        body: 'يقسم الفيديو إلى مقاطع زمنية محددة، وعند امتلاء المساحة المخصصة للتسجيل يتم استبدال أقدم المقاطع غير المحمية تلقائيًا لضمان استمرار التوثيق دون توقف مفاجئ.',
      },
      {
        title: 'التسجيل في الخلفية (Background Recording)',
        body: 'يتيح متابعة تسجيل الطريق أثناء فتح الخرائط أو تلقي المكالمات، بشرط منح أذونات الكاميرا والعمل في الخلفية وعدم إغلاق النظام للتطبيق بسبب قيود توفير الطاقة.',
      },
      {
        title: 'مراجعة الرحلات وحفظ المقاطع المهمة',
        body: 'يمكنك الرجوع إلى سجل الرحلات (Trip Recording) لاستعراض الفيديوهات المسجلة وتثبيت المقاطع المهمة حتى لا يتم الكتابة فوقها في دورة التسجيل التالية.',
      },
    ],
    technicalConstraintsTitle: 'الأذونات والضوابط التقنية للتسجيل',
    technicalConstraints: [
      'يتطلب منح أذونات الكاميرا، الميكروفون (اختياريًا)، والتخزين، والإشعارات.',
      'قد يتأثر الأداء في الخلفية بسياسات إدارة البطارية الخاصة ببعض الشركات المصنعة للهواتف أو بارتفاع درجة حرارة الجهاز في الأجواء الحارة.',
      'جودة الفيديو وزاوية الرؤية تعتمدان على مواصفات كاميرا الهاتف وطريقة تثبيته على التابلوه أو الزجاج الأمامي.',
    ],
  },
} as const;

export const DASHCAM_SHOWCASE_CONTENT = DASHCAM_SHOWCASE_CONTENT_BY_LANG.ar;

export const DANGER_MODE_CONTENT_BY_LANG = {
  en: {
    kicker: 'Emergency Documentation · Danger Mode',
    title: 'In Critical Moments, Documentation and Communication Matter.',
    subtitle:
      'Danger Mode is built as a fast, clear tool for critical road situations—combining priority protection for your active video recording with alerting the trusted emergency contacts you selected in advance.',
    badgeNote:
      'Danger Mode locks recordings and notifies your pre-selected emergency contacts inside the app, subject to granted permissions and network connectivity.',
    steps: [
      {
        step: '01',
        title: 'Activate Danger Mode & Lock Footage',
        description:
          'Once you manually trigger Danger Mode in the app, the system secures the current video recording as a priority emergency file so it cannot be overwritten by Loop Recording.',
        footer: 'Operates locally on the device upon activation',
      },
      {
        step: '02',
        title: 'Notify Pre-Selected Emergency Contacts',
        description:
          'The app prepares and triggers alert and sharing mechanisms for the emergency contacts you previously configured in your account, according to granted permissions and network status.',
        footer: 'Requires pre-configured contacts & permissions',
      },
      {
        step: '03',
        title: 'Cloud Backup of Recordings',
        description:
          'The recording linked to Danger Mode is uploaded to the cloud to preserve it even if the phone is damaged, when an active internet connection and eligible account capabilities are available.',
        footer: 'Requires internet connection & eligible account plan',
      },
    ],
    disclaimersTitle: 'Important Scope & Operational Boundaries of Danger Mode',
    strictDisclaimers: [
      'The app does NOT automatically call official emergency services (ambulance or police). In life-threatening emergencies, always contact official emergency numbers directly.',
      'Danger Mode does not guarantee physical rescue arrival; it serves strictly as an incident documentation and contact notification tool.',
      'Cloud backup and alert delivery depend on active internet connectivity, valid device permissions, and enabled account/subscription capabilities.',
    ],
  },
  ar: {
    kicker: 'وضع الخطر · Danger Mode',
    title: 'وقت الخطر، التوثيق والتواصل بيفرقوا.',
    subtitle:
      'صُمم وضع الخطر ليكون أداة سريعة وواضحة في المواقف الحرجة على الطريق، حيث يجمع بين تأمين الفيديو المسجل وإبلاغ دائرة الأمان التي اخترتها بنفسك.',
    badgeNote:
      'صُمم وضع الخطر لتأمين التسجيلات وإشعار جهات الطوارئ التي تحددها بنفسك داخل التطبيق، وفق الأذونات والاتصال المتاح.',
    steps: [
      {
        step: '01',
        title: 'تفعيل وضع الخطر وتوثيق الموقف',
        description:
          'بمجرد تفعيل Danger Mode يدويًا داخل التطبيق، يبدأ النظام في تأمين تسجيل الفيديو الحالي كملف طوارئ ذي أولوية لمنع حذفه بواسطة التسجيل الدوري.',
        footer: 'يعمل محليًا فور التفعيل داخل التطبيق',
      },
      {
        step: '02',
        title: 'تنبيه جهات الاتصال المحددة مسبقًا',
        description:
          'يقوم التطبيق بتجهيز وإرسال آليات التنبيه والمشاركة إلى جهات الطوارئ التي قمت بإضافتها مسبقًا في حسابك، وفق الأذونات الممنوحة وحالة الشبكة.',
        footer: 'يتطلب تحديد جهات الاتصال مسبقًا ومنح الأذونات',
      },
      {
        step: '03',
        title: 'الحفظ السحابي للتسجيلات (Cloud Backup)',
        description:
          'يتم رفع التسجيل المرتبط بوضع الخطر إلى السحابة لحمايته حتى في حال تعرض الهاتف للتلف، وذلك عند توفر اتصال نشط بالإنترنت وتفعيل الميزة ضمن حسابك.',
        footer: 'يتطلب اتصالًا بالإنترنت وتفعيل الميزة بالحساب',
      },
    ],
    disclaimersTitle: 'توضيح مهم حول حدود عمل وضع الخطر',
    strictDisclaimers: [
      'لا يقوم التطبيق بالاتصال التلقائي بخدمات الإسعاف أو النجدة أو الشرطة، وفي الحالات الطارئة القصوى يجب التواصل المباشر مع أرقام الطوارئ الرسمية.',
      'لا يضمن وضع الخطر وصول المساعدة الميدانية، بل يعمل كأداة لتوثيق الموقف وإشعار جهات الاتصال المحددة.',
      'تعتمد ميزة الحفظ السحابي وإرسال التنبيهات على جودة الاتصال بالإنترنت، وصلاحية الأذونات على الهاتف، وإمكانات الحساب/الاشتراك المفعلة.',
    ],
  },
} as const;

export const DANGER_MODE_CONTENT = DANGER_MODE_CONTENT_BY_LANG.ar;

export const ROADSIDE_SERVICES_BY_LANG: Record<Language, RoadsideServiceItem[]> = {
  en: [
    {
      id: 'winch',
      index: '01.',
      title: 'Winch & Recovery',
      accessMode: 'direct_or_directory',
      accessLabel: 'Service Request / Connect by Coverage Area',
      description:
        'For breakdowns or situations requiring safe vehicle towing and roadside assistance to a service center or destination across Egypt.',
      useCases: [
        'Towing immobilized vehicles safely',
        'Assistance during sudden roadside stops',
        'Connecting drivers with available winch operators',
      ],
    },
    {
      id: 'mechanic',
      index: '02.',
      title: 'Auto Mechanic',
      accessMode: 'directory_and_request',
      accessLabel: 'Directory Discovery or Request by Coverage',
      description:
        'Access automotive mechanics and workshops to handle unexpected mechanical breakdowns, engine diagnostics, or routine maintenance.',
      useCases: [
        'Engine & cooling system troubleshooting',
        'Inspection of sudden mechanical faults',
        'Finding nearby workshops and technicians',
      ],
    },
    {
      id: 'tires',
      index: '03.',
      title: 'Tires & Wheel Specialist',
      accessMode: 'directory_and_request',
      accessLabel: 'Directory Discovery or Request by Coverage',
      description:
        'Tire puncture repair, spare wheel replacement, air pressure adjustment, and balancing when dealing with flat or damaged tires.',
      useCases: [
        'Puncture repair & spare tire mounting',
        'Tire pressure & tread condition checks',
        'Locating the nearest tire service center',
      ],
    },
    {
      id: 'electrician',
      index: '04.',
      title: 'Auto Electrician',
      accessMode: 'directory_and_request',
      accessLabel: 'Directory Discovery or Request by Coverage',
      description:
        'Support for car battery issues, alternators, starters, wiring harnesses, fuses, lighting systems, and electronic sensors.',
      useCases: [
        'Battery jump-start or replacement',
        'Alternator & starter motor repairs',
        'Electrical circuit & fuse diagnostics',
      ],
    },
  ],
  ar: [
    {
      id: 'winch',
      index: '01.',
      title: 'ونش إنقاذ',
      accessMode: 'direct_or_directory',
      accessLabel: 'طلب خدمة / تواصل حسب المتاح في نطاقك',
      description:
        'للمواقف التي تتعطل فيها السيارة بالكامل أو تتطلب نقلها بأمان إلى مركز صيانة أو موقع آخر على الطرق داخل مصر.',
      useCases: [
        'نقل السيارات المتعطلة على الطريق',
        'المساعدة في حالات التوقف المفاجئ',
        'ربط السائق بمقدمي خدمة الونش المتاحين',
      ],
    },
    {
      id: 'mechanic',
      index: '02.',
      title: 'ميكانيكي سيارات',
      accessMode: 'directory_and_request',
      accessLabel: 'استكشاف عبر الدليل أو طلب حسب التغطية',
      description:
        'الوصول إلى فنيين وورش ميكانيكا السيارات للتعامل مع الأعطال الميكانيكية الطارئة أو أعمال الصيانة الدورية والفحص.',
      useCases: [
        'أعطال المحرك ودورة التبريد',
        'فحص الأعطال الميكانيكية المفاجئة',
        'الوصول لورش وفنيين بالقرب من موقعك',
      ],
    },
    {
      id: 'tires',
      index: '03.',
      title: 'فني كاوتش وإطارات',
      accessMode: 'directory_and_request',
      accessLabel: 'استكشاف عبر الدليل أو طلب حسب التغطية',
      description:
        'خدمات إصلاح واستبدال الإطارات وضبط ضغط الهواء والترصيص للتعامل مع ثقوب الكاوتش أو تلف الإطار أثناء التنقل.',
      useCases: [
        'إصلاح ثقوب الإطارات وتغيير الاستبن',
        'ضبط ضغط الهواء وفحص حالة الكاوتش',
        'الوصول لأقرب مركز خدمة إطارات',
      ],
    },
    {
      id: 'electrician',
      index: '04.',
      title: 'كهربائي سيارات',
      accessMode: 'directory_and_request',
      accessLabel: 'استكشاف عبر الدليل أو طلب حسب التغطية',
      description:
        'التعامل مع مشكلات البطارية، الدينامو، المارش، والضفيرة الكهربائية وأنظمة الإضاءة والحساسات في السيارة.',
      useCases: [
        'شحن أو تغيير بطارية السيارة',
        'إصلاح أعطال الدينامو والمارش',
        'فحص الدوائر الكهربائية والفيوزات',
      ],
    },
  ],
};

export const ROADSIDE_SERVICES = ROADSIDE_SERVICES_BY_LANG.ar;

export const ROADSIDE_NOTE_BY_LANG: Record<Language, string> = {
  en: 'The app transparently indicates how each service is available in your area—whether by sending a direct request to active providers connected via RoadX Business or by browsing verified provider details through the directory.',
  ar: 'توضح واجهة التطبيق نوع الإتاحة لكل خدمة في منطقتك بشفافية؛ سواء عبر إرسال طلب مباشر لمقدمي الخدمة المتصلين بـ RoadX Business أو من خلال استعراض بيانات مقدمي الخدمات المتاحين في الدليل.',
};

export const ROADSIDE_NOTE = ROADSIDE_NOTE_BY_LANG.ar;

export const HOW_IT_WORKS_BY_LANG = {
  en: [
    {
      step: '01',
      title: 'Download RoadX & Create Your Account',
      description:
        'Install the app on your smartphone, complete a quick registration, and grant the core permissions required for camera, location, and notifications.',
    },
    {
      step: '02',
      title: 'Select Your Driving Feature or Service',
      description:
        'Choose what you need before or during your trip: start Dashcam recording, enable AI drowsiness monitoring, or look for a nearby roadside service.',
    },
    {
      step: '03',
      title: 'Follow Clear In-App Instructions',
      description:
        'Mount your phone at a clear angle while driving, or select your required car service specialty and follow the guided steps on screen.',
    },
    {
      step: '04',
      title: 'Review Recordings or Track Service Details',
      description:
        'Browse your saved trip videos anytime, or follow up on your service request status and provider contact details within the platform.',
    },
  ],
  ar: [
    {
      step: '01',
      title: 'حمّل RoadX وأنشئ حسابك',
      description:
        'ثبّت التطبيق على هاتفك، أنشئ حسابك في خطوات بسيطة، وامنح الأذونات الأساسية اللازمة لتشغيل الكاميرا والموقع والإشعارات.',
    },
    {
      step: '02',
      title: 'اختر ميزة القيادة أو الخدمة المناسبة',
      description:
        'حدد ما تحتاجه قبل أو أثناء رحلتك: تشغيل Dashcam، تفعيل مراقبة النعاس بالذكاء الاصطناعي، أو البحث عن خدمة طريق قريبة.',
    },
    {
      step: '03',
      title: 'استخدم الميزة واتبع التعليمات المعروضة',
      description:
        'ثبّت هاتفك بزاوية واضحة أثناء القيادة، أو اختر نوع خدمة السيارة المطلوبة واتبع الخطوات الواضحة على الشاشة.',
    },
    {
      step: '04',
      title: 'راجع التسجيلات أو تفاصيل الخدمة وفق المتاح',
      description:
        'استعرض فيديوهات رحلاتك المسجلة في أي وقت، أو تابع حالة طلبك وتفاصيل التواصل مع مقدم الخدمة من داخل المنظومة.',
    },
  ],
} as const;

export const HOW_IT_WORKS_STEPS = HOW_IT_WORKS_BY_LANG.ar;

export const BUSINESS_CONTENT_BY_LANG = {
  en: {
    kicker: 'Service Provider Ecosystem · RoadX Business',
    title: 'Reach More Customers with RoadX Business.',
    description:
      'RoadX Business is not an isolated app—it is the core engine connecting driver needs in the RoadX client app with Winch operators, Mechanics, Tire specialists, and Auto Electricians, providing an organized digital channel to view available requests and manage work.',
    categories: [
      {
        id: 'winch',
        title: 'Winch & Roadside Recovery',
        detail: 'Receive towing and vehicle recovery requests within your coverage zone.',
      },
      {
        id: 'mechanic',
        title: 'Auto Mechanics & Maintenance',
        detail: 'Showcase workshop services to drivers and receive diagnostic or repair inquiries.',
      },
      {
        id: 'tires',
        title: 'Tires & Wheel Technicians',
        detail: 'Connect with car owners looking for tire repair, replacement, and balancing.',
      },
      {
        id: 'electrician',
        title: 'Auto Electricians',
        detail: 'Handle battery, alternator, and electrical requests with clear job status management.',
      },
    ],
    benefits: [
      'Dedicated interface to view available requests and clear job details',
      'Direct connection with RoadX drivers searching for real automotive services',
      'Simple workflow organization (Available / In Progress / Completed) without complexity',
      'Complete transparency: request volume depends on geographic area and actual demand without exaggerated income promises',
    ],
    primaryCta: 'Join RoadX Business as a Provider',
    secondaryCta: 'Explore RoadX Business Page',
  },
  ar: {
    kicker: 'منظومة مقدمي الخدمات · RoadX Business',
    title: 'شغلك يوصل لعملاء أكتر مع RoadX Business.',
    description:
      'RoadX Business ليس تطبيقًا منفصلًا، بل هو المحرك الذي يربط طلبات واحتياجات السائقين في تطبيق RoadX بمقدمي خدمات الونش والميكانيكا والكاوتش وكهرباء السيارات، ليمنحهم قناة رقمية منظمة لاستقبال الطلبات المتاحة وإدارة عملهم.',
    categories: [
      {
        id: 'winch',
        title: 'الونش والإنقاذ على الطريق',
        detail: 'استقبال طلبات نقل السيارات المتعطلة ضمن نطاق تغطيتك.',
      },
      {
        id: 'mechanic',
        title: 'الميكانيكي وصيانة السيارات',
        detail: 'تعريف السائقين بخدمات الورشة أو الصيانة واستقبال طلبات الفحص.',
      },
      {
        id: 'tires',
        title: 'فني الإطارات والكاوتش',
        detail: 'الوصول لأصحاب السيارات الباحثين عن خدمات الكاوتش والإطارات.',
      },
      {
        id: 'electrician',
        title: 'كهربائي السيارات',
        detail: 'تلبية طلبات أعطال البطاريات والكهرباء وإدارة حالة الطلب بسهولة.',
      },
    ],
    benefits: [
      'واجهة مخصصة لاستعراض الطلبات المتاحة وتفاصيل كل طلب بوضوح',
      'ربط مباشر مع منظومة عملاء RoadX الباحثين عن خدمات حقيقية على الطريق',
      'تنظيم حالة العمل (متاح / قيد التنفيذ / مكتمل) دون تعقيد تقني',
      'شفافية تامة: يعتمد حجم الطلبات على منطقتك الجغرافية ومعدل الطلب الفعلي دون وعود مبالغ فيها',
    ],
    primaryCta: 'انضم كمقدم خدمة في RoadX Business',
    secondaryCta: 'استكشف صفحة RoadX Business',
  },
} as const;

export const BUSINESS_CONTENT = BUSINESS_CONTENT_BY_LANG.ar;

export const STORE_CONTENT_BY_LANG = {
  en: {
    kicker: 'Ecosystem Additions · Store & Offers',
    title: 'In-App Store & Offers Tailored for Your Car.',
    description:
      'The RoadX ecosystem includes a dedicated Store & Offers section designed to give drivers access to automotive accessories, safety essentials, and relevant service deals in one place inside the app.',
    badgeText: 'Displayed in-app subject to availability',
    categoriesPreview: [
      {
        title: 'Phone Mounts & Driving Gear',
        note: 'For stable dashboard or windshield mounting when using Dashcam and AI monitoring.',
      },
      {
        title: 'Roadside Safety & Emergency Kits',
        note: 'Practical safety essentials recommended for every vehicle on the road.',
      },
      {
        title: 'Car Care Products & Service Offers',
        note: 'Periodic offers updated inside the app according to real market availability.',
      },
    ],
    transparencyNote:
      'Actual products, prices, and offers are displayed directly inside the application based on real availability in the Egyptian market, without listing fabricated SKUs or placeholder pricing.',
  },
  ar: {
    kicker: 'إضافات المنظومة · Store & Offers',
    title: 'متجر وعروض مخصصة لاحتياجات عربيتك.',
    description:
      'تضم منظومة RoadX قسمًا مخصصًا للمتجر والعروض (Store & Offers) يهدف إلى إتاحة منتجات وإكسسوارات السيارات والعروض ذات الصلة بالسائقين في مكان واحد داخل التطبيق.',
    badgeText: 'يُعرض داخل التطبيق وفق المتاح',
    categoriesPreview: [
      {
        title: 'حوامل وتجهيزات الهاتف للقيادة',
        note: 'لتثبيت الهاتف بزاوية مناسبة لاستخدام Dashcam ومراقبة الانتباه.',
      },
      {
        title: 'مستلزمات السلامة والطوارئ للسيارة',
        note: 'أدوات مساعدة أساسية يفضل تواجدها داخل السيارة على الطريق.',
      },
      {
        title: 'عروض خدمات ومنتجات العناية بالسيارة',
        note: 'عروض دورية يتم تحديثها داخل التطبيق وفق المتاح فعليًا.',
      },
    ],
    transparencyNote:
      'يتم عرض المنتجات والأسعار والعروض الفعلية مباشرة داخل التطبيق حسب توافرها في السوق المصري دون إدراج قوائم أسعار أو منتجات افتراضية.',
  },
} as const;

export const STORE_CONTENT = STORE_CONTENT_BY_LANG.ar;

export const WHY_ROADX_CONTENT_BY_LANG = {
  en: {
    kicker: 'Unified Value · Why RoadX?',
    title: 'One Ecosystem Combining Safety, Documentation, and Service.',
    subtitle:
      'Instead of splitting drivers across separate video recording apps and unorganized searches for winch numbers or technicians, RoadX brings these needs together in a connected experience built for Egyptian roads.',
    tableHeader: 'Conceptual Comparison: Fragmented Traditional Approach vs. Integrated RoadX Ecosystem',
    tableSubheader: 'How unified capabilities streamline the driver experience',
    traditionalLabel: 'Fragmented Traditional Approach:',
    roadxLabel: 'Inside the RoadX Ecosystem:',
    valuePillars: [
      {
        index: '01.',
        title: 'Safety & Documentation in One App',
        description:
          'Combines Dashcam, Loop Recording, AI Drowsiness Monitoring, and Danger Mode in a single interface without switching between apps.',
      },
      {
        index: '02.',
        title: 'Streamlined Access to Car Services',
        description:
          'Clear categorization of the 4 most critical specialties (Winch, Mechanic, Tires, Auto Electrician) instead of ad-hoc searching during breakdowns.',
      },
      {
        index: '03.',
        title: 'Tailored for Drivers in Egypt',
        description:
          'Bilingual English & Arabic (RTL/LTR) interface, familiar terminology, and practical alignment with everyday smartphone usage on Egyptian roads.',
      },
      {
        index: '04.',
        title: 'Dedicated Yet Connected Provider App',
        description:
          'RoadX Business gives service providers a focused work tool that connects directly with driver requests and needs in the client app.',
      },
    ],
    conceptualComparison: [
      {
        aspect: 'Trip Documentation (Dashcam)',
        traditionalApproach:
          'Requires buying external camera hardware and wiring, or using a standard camera app that fills up phone storage.',
        roadxApproach:
          'Automated Loop Recording on your smartphone with background operation support subject to device permissions.',
      },
      {
        aspect: 'Handling Driver Fatigue on the Road',
        traditionalApproach:
          'No assistive alertness notifications in vehicles without built-in factory ADAS hardware.',
        roadxApproach:
          'Camera-based AI assistive alerts when signs of drowsiness or reduced attention are detected.',
      },
      {
        aspect: 'Critical Incident Documentation',
        traditionalApproach:
          'Risk of losing video files or difficulty notifying family contacts quickly while preserving footage.',
        roadxApproach:
          'Danger Mode locks the video clip, alerts pre-selected emergency contacts, and supports cloud backup when connected.',
      },
      {
        aspect: 'Reaching Roadside Services & Technicians',
        traditionalApproach:
          'Random social media searches or unorganized phone numbers when a breakdown happens.',
        roadxApproach:
          'Connected ecosystem linking the driver app with RoadX Business for Winch, Mechanic, Tires, and Auto Electricians.',
      },
    ],
  },
  ar: {
    kicker: 'القيمة المجمعة · لماذا RoadX؟',
    title: 'منظومة واحدة تجمع الأمان والتوثيق والخدمة.',
    subtitle:
      'بدل تشتيت السائق بين تطبيقات منفصلة لتسجيل الفيديو وأخرى للبحث العشوائي عن أرقام الونش أو الفنيين، يجمع RoadX هذه الاحتياجات في تجربة مترابطة مصممة لواقع الطرق في مصر.',
    tableHeader: 'مقارنة مفاهيمية: التعامل التقليدي المتفرق مقابل منظومة RoadX المتكاملة',
    tableSubheader: 'توضيح لتكامل الوظائف داخل تجربة واحدة',
    traditionalLabel: 'الأسلوب المتفرق التقليدي:',
    roadxLabel: 'داخل منظومة RoadX:',
    valuePillars: [
      {
        index: '01.',
        title: 'خدمات السلامة والتوثيق في تطبيق واحد',
        description:
          'يجمع بين Dashcam، التسجيل الدوري، تنبيهات النعاس بالذكاء الاصطناعي، ووضع الخطر في واجهة واحدة دون الحاجة لتبديل التطبيقات.',
      },
      {
        index: '02.',
        title: 'سهولة الوصول إلى خدمات السيارات',
        description:
          'تصنيف واضح لأهم 4 تخصصات يحتاجها السائق (ونش، ميكانيكا، كاوتش، كهرباء) بدل البحث غير المنظم في وقت الأزمة.',
      },
      {
        index: '03.',
        title: 'تجربة مناسبة للسائق المصري',
        description:
          'واجهة عربية وإنجليزية واضحة، مصطلحات مألوفة، ومراعاة لطبيعة استخدام الهواتف الذكية والاحتياجات اليومية على الطرق المصرية.',
      },
      {
        index: '04.',
        title: 'منظومة منفصلة ومتصلة لمقدمي الخدمات',
        description:
          'تطبيق RoadX Business يمنح مقدم الخدمة أداة عمل مخصصة تتصل مباشرة بطلبات واحتياجات السائقين في تطبيق العملاء.',
      },
    ],
    conceptualComparison: [
      {
        aspect: 'توثيق الرحلات (Dashcam)',
        traditionalApproach:
          'يتطلب شراء كاميرا خارجية وتوصيلات، أو استخدام تطبيق كاميرا عادي يستهلك المساحة بالكامل.',
        roadxApproach:
          'تسجيل دوري (Loop Recording) عبر الهاتف مع دعم العمل في الخلفية وفق أذونات الجهاز.',
      },
      {
        aspect: 'التعامل مع الإرهاق على الطريق',
        traditionalApproach:
          'غياب أي وسيلة تنبيه مساعدة في السيارات غير المجهزة بأنظمة مساعدة السائق المتقدمة.',
        roadxApproach:
          'تنبيهات مساعدة بالذكاء الاصطناعي عند رصد مؤشرات النعاس أو قلة الانتباه عبر الكاميرا.',
      },
      {
        aspect: 'توثيق المواقف الحرجة والطوارئ',
        traditionalApproach:
          'احتمالية ضياع الفيديو أو صعوبة إبلاغ المقربين بسرعة مع حفظ التسجيل.',
        roadxApproach:
          'وضع الخطر لتأمين الفيديو، إشعار جهات الطوارئ المحددة، والحفظ السحابي عند توفر الاتصال.',
      },
      {
        aspect: 'الوصول لخدمات الطريق والفنيين',
        traditionalApproach:
          'البحث العشوائي في المنشورات أو الاعتماد على أرقام غير مصنفة وقت تعطل السيارة.',
        roadxApproach:
          'منظومة تربط تطبيق السائق بتطبيق RoadX Business للونش والميكانيكا والكاوتش والكهرباء.',
      },
    ],
  },
} as const;

export const WHY_ROADX_CONTENT = WHY_ROADX_CONTENT_BY_LANG.ar;

export const FAQ_ITEMS_BY_LANG: Record<Language, FaqItem[]> = {
  en: [
    {
      id: 'what-is-roadx',
      category: 'general',
      categoryLabel: 'General',
      question: 'What is RoadX?',
      answer:
        'RoadX is an automotive technology ecosystem for safer driving and car services in Egypt, developed by RoadXpert Technology. It combines driver assistance tools (Dashcam trip recording, AI drowsiness alerts, and Danger Mode) with access to essential roadside services and an automotive store, connected to the RoadX Business app for service providers.',
    },
    {
      id: 'background-recording',
      category: 'safety',
      categoryLabel: 'Safety & Recording',
      question: 'Can I record my trip while using other apps on my phone?',
      answer:
        'Yes, RoadX supports Background Recording so you can use navigation apps or take calls while documenting the road. Continuous background operation depends on granting required permissions, battery optimization settings, and the technical rules of your device operating system.',
    },
    {
      id: 'ai-drowsiness',
      category: 'safety',
      categoryLabel: 'Safety & Recording',
      question: 'How do AI drowsiness alerts work?',
      answer:
        'AI Drowsiness Monitoring uses the phone camera to analyze facial and eye indicators for signs of fatigue or distraction while driving, issuing audio and visual alerts. It is an assistive feature dependent on mounting angle and lighting, and does not replace adequate rest or guarantee accident prevention.',
    },
    {
      id: 'what-is-danger-mode',
      category: 'safety',
      categoryLabel: 'Safety & Recording',
      question: 'What is Danger Mode?',
      answer:
        'Danger Mode is designed for critical situations on the road. It locks and protects the current video recording, triggers alert and sharing mechanisms with your pre-selected emergency contacts, and supports cloud backup subject to permissions and internet connectivity. The app does not automatically contact police or ambulance services.',
    },
    {
      id: 'danger-mode-internet',
      category: 'safety',
      categoryLabel: 'Safety & Recording',
      question: 'Does Danger Mode require an internet connection?',
      answer:
        'Local video recording and locking on your phone memory work offline. However, sending alerts and sharing location/status with your pre-selected emergency contacts, as well as uploading footage to Cloud Backup, require an active internet connection, valid permissions, and eligible account capabilities.',
    },
    {
      id: 'available-car-services',
      category: 'services',
      categoryLabel: 'Roadside Services',
      question: 'What car services are available in RoadX?',
      answer:
        'The platform focuses on four core specialties drivers need on the road: Winch & Recovery, Auto Mechanics, Tire & Wheel Technicians, and Auto Electricians, alongside the Store & Offers section. The app transparently shows whether a service is available for direct request or directory discovery based on area coverage.',
    },
    {
      id: 'roadx-vs-business',
      category: 'business',
      categoryLabel: 'Service Providers',
      question: 'What is the difference between RoadX and RoadX Business?',
      answer:
        'RoadX is designed for drivers and car owners to use safety features (Dashcam, AI Drowsiness Monitoring, Danger Mode) and request or discover car services. RoadX Business is the dedicated app for automotive service providers (winch operators, mechanics, tire technicians, and auto electricians) to receive available requests and manage their work within the same ecosystem.',
    },
    {
      id: 'subscription-or-free',
      category: 'plans',
      categoryLabel: 'Plans & Devices',
      question: 'Is RoadX free or subscription-based?',
      answer:
        'Core features are provided according to the app’s official release policy, while certain advanced capabilities (such as extended cloud backup storage in Danger Mode or specific plans) may be tied to subscription tiers.',
      verificationNote:
        'Pre-launch note: Specific plan tiers and free usage allowances are finalized according to the official pricing schedule inside the app.',
    },
    {
      id: 'ios-iphone-support',
      category: 'plans',
      categoryLabel: 'Plans & Devices',
      question: 'Does the app work on iPhone (iOS)?',
      answer:
        'Platform apps are rolled out according to officially published store versions. For iPhone (iOS), please check the official availability status in the download modal at launch, as background recording permissions vary across operating systems.',
      verificationNote:
        'Pre-launch note: Official iOS App Store link and release confirmation will be updated prior to campaign launch.',
    },
  ],
  ar: [
    {
      id: 'what-is-roadx',
      category: 'general',
      categoryLabel: 'عام',
      question: 'ما هو RoadX؟',
      answer:
        'RoadX هو منظومة تقنية للقيادة الآمنة وخدمات السيارات في مصر مقدمة من شركة RoadXpert Technology. يجمع التطبيق بين أدوات مساعدة للسائق (مثل تسجيل الطريق Dashcam، تنبيهات النعاس بالذكاء الاصطناعي، ووضع الخطر) وبين الوصول إلى خدمات الطريق الأساسية ومتجر مستلزمات السيارات، ويرتبط بتطبيق RoadX Business المخصص لمقدمي الخدمات.',
    },
    {
      id: 'background-recording',
      category: 'safety',
      categoryLabel: 'السلامة والتسجيل',
      question: 'هل يمكن تسجيل الرحلة أثناء استخدام الهاتف؟',
      answer:
        'نعم، يدعم RoadX ميزة التسجيل في الخلفية (Background Recording) لتتمكن من استخدام تطبيقات الملاحة أو تلقي المكالمات أثناء توثيق الطريق. يعتمد استمرار التسجيل في الخلفية على منح الأذونات المطلوبة وإعدادات إدارة البطارية والقيود التقنية الخاصة بنظام التشغيل ونوع هاتفك.',
    },
    {
      id: 'ai-drowsiness',
      category: 'safety',
      categoryLabel: 'السلامة والتسجيل',
      question: 'كيف تعمل تنبيهات النعاس؟',
      answer:
        'تستخدم ميزة AI Drowsiness Monitoring كاميرا الهاتف لتحليل مؤشرات الوجه والعين ورصد علامات النعاس أو تشتت الانتباه أثناء القيادة، ثم تصدر تنبيهات لمساعدة السائق. هذه الميزة أداة مساعدة تعتمد على زاوية تثبيت الهاتف والإضاءة، ولا تُعد بديلاً عن أخذ قسط كافٍ من الراحة أو ضمانًا لمنع الحوادث.',
    },
    {
      id: 'what-is-danger-mode',
      category: 'safety',
      categoryLabel: 'السلامة والتسجيل',
      question: 'ما هو وضع الخطر؟',
      answer:
        'وضع الخطر (Danger Mode) هو وضع مخصص للمواقف الحرجة على الطريق؛ يتيح توثيق الموقف وحماية الفيديو المسجل، وتفعيل آليات التنبيه والمشاركة مع جهات الاتصال للطوارئ التي يحددها المستخدم مسبقًا، بالإضافة إلى الحفظ السحابي للتسجيلات وفق الأذونات والاتصال بالإنترنت. التطبيق لا يتصل تلقائيًا بالشرطة أو الإسعاف.',
    },
    {
      id: 'danger-mode-internet',
      category: 'safety',
      categoryLabel: 'السلامة والتسجيل',
      question: 'هل يحتاج وضع الخطر إلى الإنترنت؟',
      answer:
        'التسجيل المحلي للفيديو على ذاكرة الهاتف يمكن أن يتم بدون إنترنت، لكن إرسال التنبيهات ومشاركة الموقع أو البيانات مع جهات الطوارئ المحددة، وكذلك رفع التسجيلات إلى الحفظ السحابي (Cloud Backup)، يتطلب وجود اتصال نشط بالإنترنت وتفعيل الأذونات والإمكانات المناسبة في الحساب.',
    },
    {
      id: 'available-car-services',
      category: 'services',
      categoryLabel: 'خدمات الطريق',
      question: 'ما خدمات السيارات الموجودة؟',
      answer:
        'تركز المنظومة على أربع فئات رئيسية يحتاجها السائق على الطريق: خدمات ونش الإنقاذ، ميكانيكي السيارات، فني الإطارات والكاوتش، وكهربائي السيارات، بالإضافة إلى قسم المتجر والعروض (Store & Offers). ويوضح التطبيق ما إذا كانت الخدمة متاحة للطلب المباشر أو للاستكشاف والتواصل عبر الدليل حسب التغطية.',
    },
    {
      id: 'roadx-vs-business',
      category: 'business',
      categoryLabel: 'مقدمو الخدمات',
      question: 'ما الفرق بين RoadX وRoadX Business؟',
      answer:
        'تطبيق RoadX مخصص للسائقين وأصحاب السيارات للاستفادة من ميزات الأمان (Dashcam، مراقبة النعاس، وضع الخطر) وطلب أو استكشاف خدمات السيارات. أما تطبيق RoadX Business فهو مخصص لمقدمي خدمات السيارات (أصحاب الأوناش، الميكانيكية، فنيي الكاوتش، وكهربائية السيارات) لاستقبال الطلبات المتاحة وإدارة أعمالهم ضمن نفس المنظومة.',
    },
    {
      id: 'subscription-or-free',
      category: 'plans',
      categoryLabel: 'الباقات والأجهزة',
      question: 'هل هناك اشتراك أم استخدام مجاني؟',
      answer:
        'تعتمد المنظومة على إتاحة الميزات الأساسية وفق السياسة المعتمدة للتطبيق، بينما قد ترتبط بعض الإمكانات المتقدمة (مثل سعات الحفظ السحابي في وضع الخطر أو باقات محددة) بخطط اشتراك.',
      verificationNote:
        'ملاحظة قبل النشر: يتم تحديث هذا البند بتفاصيل الباقات النهائية والمزايا المجانية فور اعتماد جدول الأسعار الرسمي.',
    },
    {
      id: 'ios-iphone-support',
      category: 'plans',
      categoryLabel: 'الباقات والأجهزة',
      question: 'هل يعمل التطبيق على iPhone؟',
      answer:
        'تتوفر تطبيقات المنظومة وفق الإصدارات المعتمدة والمنشورة رسميًا في المتاجر. بالنسبة لهواتف iPhone (نظام iOS)، يرجى التحقق من حالة الإتاحة الرسمية في صفحة التحميل عند الإطلاق، حيث تختلف بعض صلاحيات التسجيل في الخلفية بين أنظمة التشغيل.',
      verificationNote:
        'ملاحظة قبل النشر: يرجى تأكيد حالة توافر نسخة iOS ورابط App Store الرسمي قبل إطلاق الحملة التسويقية.',
    },
  ],
};

export const FAQ_ITEMS = FAQ_ITEMS_BY_LANG.ar;
