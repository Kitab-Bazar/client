import { Lang } from '#base/context/LanguageContext';

export type LangString = Record<Lang, string>;
export type LangStringWithTemplate = LangString & {
    var: string[];
}

export interface LangStrings {
    [key: string]: LangString | LangStringWithTemplate;
}

export const common = {
    kitabBazarAppLabel: {
        en: 'Kitab Bazar',
        ne: 'किताब बजार',
    },
    logoutErrorMessage: {
        en: 'Error logging out',
        ne: 'लग आउटमा समस्या!',
    },
    logoutSuccessMessage: {
        en: 'Successfully logged out',
        ne: 'सफलतापूर्वक लग आउट भयो',
    },
    unathenticatedPageHeader: {
        en: 'Oh no!',
        ne: 'धत्तेरिका!',
    },
    unathenticatedPageContent: {
        en: 'The page does not exist or you do not have permissions to view this page.',
        ne: 'यो पृष्ठ उपलब्ध छैन वा तपाईंसँग यो पृष्ठ हेर्ने अनुमति छैन।',
    },
    dayLabel: {
        en: 'day(s)',
        ne: 'दिन',
    },
    hourLabel: {
        en: 'hour(s)',
        ne: 'घण्टा',
    },
    minuteLabel: {
        en: 'minute(s)',
        ne: 'मिनेट',
    },
    secondLabel: {
        en: 'second(s)',
        ne: 'सेकेन्ड',
    },
};

export const nagbar = {
    orderWindowExpiryLabel: {
        en: 'We are not taking new orders at the moment.',
        ne: 'हामी अहिले नयाँ अर्डर लिइरहेका छैनौं। ',
    },
    userNotVerifiedLabel: {
        en: 'Your account has not been verified yet. You will receive a call for verification soon.',
        ne: 'तपाईंको खाता अझै प्रमाणित गरिएको छैन। तपाईंले चाँडै प्रमाणीकरणको लागि कल प्राप्त गर्नुहुनेछ।',
    },
    isStagingLabel: {
        en: 'This is a testing server for Kitab Bazar. Please proceed to {link} to place actual orders.',
        ne: 'यो किताब बजारको लागि परीक्षण सर्भर हो। वास्तविक अर्डरहरू राख्न कृपया {link} मा जानुहोस्।',
    },
    kitabBazarAppLabel: {
        en: 'Kitab Bazar',
        ne: 'किताब बजार',
    },
};

export const navbar = {
    searchAllBooksPlaceholder: {
        en: 'Search all books',
        ne: 'किताब खोज्नुहोस्',
    },
    donationsButtonLabel: {
        en: 'Donations',
        ne: 'योगदान',
    },
    signUpButtonLabel: {
        en: 'Register',
        ne: 'दर्ता',
    },
    loginButtonLabel: {
        en: 'Login',
        ne: 'लग इन',
    },
    greetings: {
        en: 'Hello {name}!',
        ne: 'नमस्कार {name}!',
    },
    gotoProfile: {
        en: 'Profile',
        ne: 'प्रोफाइलमा जानुहोस्',
    },
    logoutConfirmMessage: {
        en: 'Are you sure you want to logout?',
        ne: 'के तपाईं साँच्चै लग आउट गर्न चाहनुहुन्छ?',
    },
    logoutButtonLabel: {
        en: 'Logout',
        ne: 'लग आउट',
    },
    orderWindowMessage: {
        en: 'Please order books within {relativeTime}',
        ne: 'कृपया {relativeTime} भित्र किताबहरू अर्डर गर्नुहोस्',
    },
    homeLabel: {
        en: 'Home',
        ne: 'गृह पृष्ठ',
    },
    booksLabel: {
        en: 'Books',
        ne: 'किताबहरु ',
    },
    moderationLabel: {
        en: 'Moderation',
        ne: 'मध्यस्थता',
    },
    cancelLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
};

export const donations = {
    donationsHeading: {
        en: 'Donations',
        ne: 'योगदान',
    },
    donationsDescription1: {
        en: 'At Kitab Bazar, we believe in the power of early reading to shape young minds. Driven by the importance of early literacy and aligned with the government-mandated PMEC standard, we are dedicated to ensuring that every grade in schools has book corners filled with enriching supplementary materials.',
        ne: 'किताब बजारमा, हामी युवा दिमागलाई आकार दिन प्रारम्भिक पढाइको शक्तिमा विश्वास गर्छौं। प्रारम्भिक साक्षरताको महत्त्वबाट सञ्चालित र सरकारले-अनिवार्य PMEC मापदण्डसँग पङ्क्तिबद्ध, हामी विद्यालयहरूमा प्रत्येक कक्षामा पूरक सामग्रीहरूले भरिएको पुस्तक कुनाहरू छन् भनी सुनिश्चित गर्न समर्पित छौं।',
    },
    donationsDescription2: {
        en: 'With your donation, Kitab Bazar can ensure that every school, even in remote areas, has book corners filled with stories, poems, and songs that inspire a love for reading. Your contribution fuels the future of young minds.',
        ne: 'तपाईंको दानले, किताब बजारले दुर्गम क्षेत्रहरूमा समेत प्रत्येक विद्यालयमा कथा, कविता र गीतहरूले भरिएको पुस्तक कुनाहरू छन् भनी सुनिश्चित गर्न सक्छ जसले पढ्नको लागि प्रेमलाई प्रेरित गर्दछ। तपाईंको योगदानले युवा दिमागको भविष्यलाई इन्धन गर्छ ।',
    },
    donationsDescription3: {
        en: 'Thank you for your generosity!',
        ne: 'तपाईंको उदारता को लागी धन्यवाद!',
    },
    donateMoneyHeading: {
        en: 'Donate',
        ne: 'योगदान',
    },
    donateMoneyDescription: {
        en: 'To make the donation, please follow this link.',
        ne: 'दान गर्न, कृपया यो लिङ्क पछ्याउनुहोस्।',
    },
    donateSecondHandBooksHeading: {
        en: 'Donate Second Hand Books',
        ne: 'दोस्रो हात पुस्तकहरू दान गर्नुहोस्',
    },
    donateSecondHandBooksDescription: {
        en: 'Please fill the form below to donate second hand books.',
        ne: 'सेकेन्ड ह्यान्ड पुस्तकहरू दान गर्न कृपया तलको फारम भर्नुहोस्।',
    },
    donateBooksFromWebsiteHeading: {
        en: 'Donate Books from Website',
        ne: 'वेबसाइटबाट पुस्तकहरू दान गर्नुहोस्',
    },
    donateBooksFromWebsiteDescription: {
        en: 'Follow the general book purchasing process and contact us for further confirmation',
        ne: 'सामान्य पुस्तक खरिद प्रक्रिया पछ्याउनुहोस् र थप पुष्टिको लागि हामीलाई सम्पर्क गर्नुहोस्',
    },
    linkToTheFormButtonLabel: {
        en: 'Link to the Form',
        ne: 'फारमको लिङ्क',
    },
    contactUsAt: {
        en: 'Contact us at: +977 9762416156',
        ne: 'हामीलाई सम्पर्क गर्नुहोस्: +977 9762416156',
    },
};

export const login = {
    loginHeaderLabel: {
        en: 'Login',
        ne: 'लग इन',
    },
    emailLabel: {
        en: 'Email',
        ne: 'इमेल',
    },
    forgotPasswordLabel: {
        en: 'Forgot Password',
        ne: 'पास्स्वोर्ड  बिर्सिए',
    },
    passwordLabel: {
        en: 'Password',
        ne: 'पासवर्ड',
    },
    loginButtonLabel: {
        en: 'Login',
        ne: 'लग इन',
    },
    donotHaveAccountYetLabel: {
        en: 'Do not have an account yet?',
        ne: 'दर्ता भएको छैन?',
    },
    errorLoggingInLabel: {
        en: 'Error while logging in.',
        ne: 'लग इनमा समस्या',
    },
    registerlabel: {
        en: 'Register',
        ne: 'दर्ता  गर्नुहोस्',
    },
};

export const register = {
    registrationSuccessMessage: {
        en: 'Registration completed successfully! Please validate your account before logging in',
        ne: 'दर्ता सफलतापूर्वक सम्पन्न भयो! कृपया लग इन गर्नुअघि आफ्नो खाता प्रमाणित गर्नुहोस्',
    },
    registrationFailureMessage: {
        en: 'Error during registration!',
        ne: 'दर्ता प्रक्रियामा समस्या!',
    },
    passwordConfirmationError: {
        en: 'Password doesn\'t match',
        ne: 'पासवर्ड मेल खाँदैन',
    },
    pageHeading: {
        en: 'Register New User',
        ne: 'नयाँ प्रयोगकर्ता दर्ता गर्नुहोस्',
    },
    alreadyHaveAccountMessage: {
        en: 'Already have an account? {loginLink}',
        ne: 'पहिले नै खाता छ? {loginLink}',
    },
    individualUsersComingsoon: {
        en: 'Kitab Bazar will be open to individual users soon. Please stay tuned.',
        ne: 'किताब बजार चाँडै व्यक्तिगत प्रयोगकर्ताहरूको लागि खुला हुनेछ। कृपया सम्पर्कमा रहनुहोस्।',
    },
    loginLinkLabel: {
        en: 'Login',
        ne: 'लग इन',
    },
    emailInputLabel: {
        en: 'Email',
        ne: 'ईमेल',
    },
    passwordInputLabel: {
        en: 'Password',
        ne: 'पासवर्ड',
    },
    confirmPasswordInputLabel: {
        en: 'Confirm Password',
        ne: 'पासवर्ड सुनिश्चित गर्नुहोस्',
    },
    phoneNumberInputLabel: {
        en: 'Phone No.',
        ne: 'फोन नम्बर',
    },
    userTypeInputLabel: {
        en: 'User Type',
        ne: 'प्रयोगकर्ता प्रकार',
    },
    firstNameInputLabel: {
        en: 'First Name',
        ne: 'पहिलो नाम',
    },
    lastNameInputLabel: {
        en: 'Last Name',
        ne: 'थर',
    },
    registerButtonLabel: {
        en: 'Register',
        ne: 'दर्ता',
    },
    institutionNameInputLabel: {
        en: 'Name of the Institution',
        ne: 'संस्थाको नाम',
    },
    publisherNameInputLabel: {
        en: 'Name of the Publisher',
        ne: 'प्रकाशकको नाम',
    },
    schoolNameInputLabel: {
        en: 'Name of the School',
        ne: 'विद्यालयको नाम',
    },
    municipalityInputLabel: {
        en: 'Municipality',
        ne: 'नगरपालिका',
    },
    wardNumberInputLabel: {
        en: 'Ward Number',
        ne: 'वडा नम्बर',
    },
    localAddressInputLabel: {
        en: 'Local Address',
        ne: 'स्थानीय ठेगाना',
    },
    panInputLabel: {
        en: 'PAN',
        ne: 'प्यान',
    },
    schoolIdLabel: {
        en: 'School ID',
        ne: 'विद्यालयको आईडी',
    },
    vatNumberInputLabel: {
        en: 'VAT Number',
        ne: 'भ्याट नम्बर',
    },
    requiredFieldLabel: {
        en: 'Either pan number or school id is required',
        ne: 'या त प्यान नम्बर वा स्कूल आईडी आवश्यक छ',
    },
};

export const homePage = {
    kitabLabel: {
        en: 'Kitab',
        ne: 'किताब',
    },
    bazarLabel: {
        en: 'Bazar',
        ne: 'बजार',
    },
    tagLineLabel: {
        en: 'Where reading gets better!',
        ne: 'किताबको पहुँचबाट शिक्षाको बिकास।',
    },
    exploreButtonLabel: {
        en: 'Explore the Platfrom',
        ne: 'प्लेटफर्म अन्वेषण गर्नुहोस्',
    },
    featuredBooksLabel: {
        en: 'Featured Books',
        ne: 'मुख्य आकर्षण',
    },
    exploreByGradeHeading: {
        en: 'Explore by Grade',
        ne: 'कक्षा द्वारा अन्वेषण',
    },
    exploreByCategoryHeading: {
        en: 'Explore by Category',
        ne: 'श्रेणी द्वारा अन्वेषण गर्नुहोस्',
    },
    highestSellingBooksHeading: {
        en: 'Highest Selling Books',
        ne: 'बढी बिक्रि हुने किताबहरु',
    },
    exploreByPublisherHeading: {
        en: 'Explore by Publisher',
        ne: 'प्रकाशक द्वारा अन्वेषण',
    },
    pendingGradeListMessage: {
        en: 'Loading grades ...',
        ne: 'कक्षाहरु लोड गर्दै',
    },
    emptyGradeListMessage: {
        en: 'No grades found.',
        ne: 'कुनै कक्षा फेला परेन',
    },
    emptyCategoriesMessage: {
        en: 'No categories found',
        ne: 'कुनै कक्षाहरु भेटिएन ',
    },
    pendingCategoriesMessage: {
        en: 'Loading categories ...',
        ne: 'कक्षाहरु लोड गर्दै ...',
    },
    emptyPublishersMessage: {
        en: 'No publishers found',
        ne: 'कुनै प्रकाशक भेटिएन',
    },
    pendingPublishersMessage: {
        en: 'Loading publishers ...',
        ne: 'प्रकाशकहरू लोड गर्दै...',
    },
    emptyBooksMessage: {
        en: 'No books found',
        ne: 'कुनै किताब भेटिएन ',
    },
    pendingBooksMessage: {
        en: 'Loading books ...',
        ne: 'किताबहरु लोड गर्दै  ...',
    },
    gotoTopTitle: {
        en: 'Go to Top',
        ne: 'शीर्षमा जानुहोस्',
    },
};

export const about = {
    backgroundLabel: {
        en: 'Background',
        ne: 'पृष्ठभूमि',
    },
    platformBackgroundPartOne: {
        en: 'The idea of KITAB Bazar platform was generated through KITAB Project (Knowledge Improvement through Access of Books) launched by World Vision International Nepal (WVI Nepal) in October 2018 through technical support from World Vision Australia (WVA) and financial support of the World Bank with an aim to strengthen the education system and the book supply chain by addressing the gaps in the supply chain using Results Based Financing (RBF) mechanism. The project also aligns with one of the PMEC (Priority Enabling Minimum Conditions) standard – establishing book corners as mentioned in the National Early Grade Reading Program (NEGRP) of School Sector Development Plan (SSDP). The plan and the program emphasized on the need for an appropriate environment for enhancing reading skills amongst the children and in ensuring equitable learning across all schools in Nepal.',
        ne: 'यस डिजिटल प्लेटफर्मको पहल KITAB परियोजना (पुस्तकहरूमा पहुँच मार्फत ज्ञान सुधार) मार्फत वल्र्ड भिजन इन्टरनेशनल नेपाल (WVI नेपाल) द्वारा अक्टोबर २०१८ मा वल्र्ड भिजन अष्ट्रेलिया (WVA) को प्राविधिक सहयोग र विश्व बैंकको आर्थिक सहयोगमा सुरु गरिएको थियो। नतिजामा  आधारित वित्तिय संयन्त्र (RBF) प्रयोग गरी माग र आपूर्ति शृङ्खलामा रहेको खाडललाई सम्बोधन गरी शिक्षा प्रणालीलाई सुदृढ पार्ने उद्देश्यले यो परियोजना थालिएको थियो । परियोजना र कार्यक्रमले बालबालिकामा पढ्ने सीप अभिवृद्धि गर्न र नेपालका सबै विध्यालयहरूमा समतामूलक सिकाइ सुनिश्चित गर्न उपयुक्त वातावरणको आवश्यकतामा जोड दिएको थियो।',
    },
    platformBackgroundPartTwo: {
        en: 'The project through KITAB Bazar platform has successfully addressed the challenge of unequal opportunities/facilities to students in schools due to difficult geographical terrain, limited availability and accessibility of educational materials and limited funds available to community schools in its implemented areas. The platform was built to promote digital equity and abridge the gap between the schools and suppliers/publication houses for quality reviewed supplementary reading materials.',
        ne: 'किताब बजार प्लेटफर्म मार्फत परियोजनाले कठिन भौगोलिक भूभाग, शैक्षिक सामग्रीको सीमित उपलब्धता र पहुँच र सामुदायिक विद्यालयहरूमा उपलब्ध सीमित रकमका कारण विध्यार्थीहरूलाई उपलब्ध हुने असमान अवसर/सुविधाको चुनौतीलाई सफलतापूर्वक सम्बोधन गरेको थियो। यो प्लेटफर्म डिजिटल इक्विटीको प्रवर्द्धन गर्न र गुणस्तर समीक्षा गरिएका पूरक पठन सामग्रीहरूको लागि विध्यालय र प्रकाशनघरहरू बीचको खाडललाई कम गर्न निर्माण गरिएको हो।',
    },
    whoAreWeLabel: {
        en: 'Who are we?',
        ne: 'हामी को हौं?',
    },
    whoAreWeDescription: {
        en: 'We are an online digital platform with the aim to improve access to quality supplementary reading materials in schools. Collaborating with various publishing firms, we have streamlined the process of selecting, ordering, and purchasing books for children. The initiative was encouraged through importance of reading from an early age and from one of the necessary PMEC standard of ensuring book corners or reading corners with supplementary reading materials in every grade as mandated by the Government. The platform was launched initially through KITAB project implemented in Sunsari and Morang by World Vision International Nepal.',
        ne: 'हामी एक अनलाइन डिजिटल प्लेटफर्म हौँ जसले आधुनिक प्रविधि द्वारा हरेक विध्यालयहरूमा र विध्यार्थीहरु समक्ष्य गुणस्तरीय पूरक पठन सामग्रीहरूको पहुँच सुधार गर्न र पुस्तक माग र आपूर्तिको खाडललाई कम गर्न मद्दत पुर्याइरहेको छ । विभिन्न प्रकाशनहरूसँग सहकार्य गर्दै, हामीले बालबालिकाका लागि पुस्तकहरू छनोट गर्ने, अर्डर र खरिद गर्ने प्रक्रियालाई सुव्यवस्थित गरेका छौं। सानै उमेरदेखि पढाइको महत्वलाई ध्यानमा राखी, स्कूलको गुणस्तर निर्धारण गर्ने PMEC मापदण्डहरू मध्ये एकको रूपमा पहिचान गरिएको पुस्तक कुनाको अवधारणाले नै यस पहललाई प्रोत्साहित गरेको थियो । वल्र्ड भिजन इन्टरनेशनल नेपालले सुनसरी र मोरङमा लागू गरेको Knowledge Improvement through Access of Books (KITAB) परियोजनामार्फत यो प्लेटफर्मको सुरुवात भएको थियो ।',
    },
    whoAreWeDescriptionPartTwo: {
        en: 'If there is any interest in adopting what has been created so far, we will provide further information and answer any concerns about the project.',
        ne: 'हाम्रो यस अभियानमा सम्मिलित हुन चाहने वा अहिलेसम्म भएका कामहरूबारे जानकारी आवश्यक परेमा , हामी यस परियोजना बारेमा सम्पूर्ण जानकारी दिनेछौँ ।',
    },
    goalsLabel: {
        en: 'Goals',
        ne: 'हाम्रा लक्ष्यहरू',
    },
    firstGoalTitle: {
        en: 'Strengthening Equitable Access: ',
        ne: 'समतामूलक पहुँचलाई सुदृढ गर्न: ',
    },
    firstGoalDescription: {
        en: 'Ensure equitable access to reading materials and enhance the learning skills and understanding ability among students from an early age.',
        ne: 'नतिजामा आधारित रिजल्ट बेस्ड फाइनान्सिङ (RBF) ले नेपालको शिक्षा प्रणालीमा पार्न सक्ने प्रभावका लागि प्रमाण-आधारलाई बलियो बनाउन बालबालिकाहरूलाई विद्यालयमा गुणस्तरीय पूरक पठन सामग्रीको पहुँच सुनिश्चित गर्न।',
    },
    secondGoalTitle: {
        en: 'Strengthening supply chain mechanism and promote digital equity ',
        ne: 'आपूर्ति श्रृंखला संयन्त्रलाई आधुनिक प्रविधि द्वारा सुदृढ गर्न: ',
    },
    secondGoalDescription: {
        en: 'for grade-appropriate supplementary reading materials to rural community schools through KITAB Bazar and use of ICT in the sector of education',
        ne: 'ग्रामीण सामुदायिक विध्यालयहरूमा कक्षा-उपयुक्त पूरक पठन सामग्रीहरूको लागि आपूर्ति श्रृंखला संयन्त्रलाई सुदृढ गर्न र शिक्षाको क्षेत्रमा ICT को प्रयोग।',
    },
    thirdGoalTitle: {
        en: 'Assist in achieving PMEC standard: ',
        ne: 'PMEC मापदण्ड प्राप्त गर्नमा सहयोग पुर्याउन: ',
    },
    thirdGoalDescription: {
        en: 'Assist in achieving the book corner standard (set by SSDP), which is identified as one of the PMEC standards determining the quality of schools.',
        ne: ' स्कूलको गुणस्तर निर्धारण गर्ने PMEC मापदण्डहरू मध्ये एकको रूपमा पहिचान गरिएको पुस्तक कुनामा मानक (SSDP द्वारा सेट गरिएको) प्राप्त गर्न मद्दत गर्न।',
    },
    accessToReadingMaterialText: {
        en: 'Children have access to sufficient supplementary reading materials in schools',
        ne: 'बालबालिकालाई विद्यालयमा पर्याप्त पूरक पठन सामग्रीको पहुँच गराउन',
    },
    bookCornerIncentiveText: {
        en: 'Incentivizing schools to invest in establishment, maintenance and utilization of book corners',
        ne: 'बुक कर्नरको स्थापना, मर्मत र उपयोगमा लगानी गर्न विद्यालयहरूलाई प्रोत्साहन गर्न',
    },
    relationshipEnhacementText: {
        en: 'Enhancing relationship between publishers and Curriculum Development Center (CDC)',
        ne: 'प्रकाशक र पाठ्यक्रम विकास केन्द्र (CDC) बीचको सम्बन्ध सुधार गर्न',
    },
    supplyChainText: {
        en: 'Strengthening supply chain mechanism for grade-appropriate supplementary reading materials to rural community schools',
        ne: 'ग्रामीण सामुदायिक विद्यालयहरूमा कक्षा-उपयुक्त पूरक पठन सामग्रीहरूको लागि आपूर्ति श्रृंखला संयन्त्रलाई सुदृढ गर्न',
    },
};

export const explore = {
    sortOptionsTitleAsc: {
        en: 'Title Ascending(A-Z)',
        ne: 'शीर्षक (क-ज्ञ)',
    },
    sortOptionsTitleDsc: {
        en: 'Title Descending(Z-A)',
        ne: 'शीर्षक (ज्ञ-क)',
    },
    sortOptionsDateAsc: {
        en: 'Date added (Older first)',
        ne: 'थपिएको मिति (पहिलो पुरानो)',
    },
    sortOptionsDateDsc: {
        en: 'Date added (Newer first)',
        ne: 'थपिएको मिति (नयाँ पहिले)',
    },
    pageTitlePublisher: {
        en: 'Books',
        ne: 'किताबहरू',
    },
    pageTitleExploreByCategory: {
        en: 'Explore Books by Category',
        ne: 'वर्ग अनुसार किताबहरू हेर्नुहोस्',
    },
    pageTitleWishList: {
        en: 'Wish List',
        ne: 'इच्छा-सूची',
    },
    pageTitleDefault: {
        en: 'Explore Books',
        ne: 'किताबहरू हेर्नुहोस्',
    },
    searchInputPlaceholder: {
        en: 'Search by book title/ISBN (3 or more characters)',
        ne: 'किताबको शीर्षक/ISBN द्वारा खोज्नुहोस् (३ वा बढी वर्णहरू)',
    },
    filterBooksHeading: {
        en: 'Filter books',
        ne: 'किताबहरू फिल्टर गर्नुहोस्',
    },
    categoriesFilterLabel: {
        en: 'Categories',
        ne: 'वर्ग',
    },
    gradeFilterLabel: {
        en: 'Grade',
        ne: 'कक्षा',
    },
    clearGradeFilterButtonLabel: {
        en: 'Clear grade filter',
        ne: 'कक्षा फिल्टर खाली गर्नुहोस्',
    },
    languageFilterLabel: {
        en: 'Language',
        ne: 'भाषा',
    },
    clearLanguageFilterButtonLabel: {
        en: 'Clear language filter',
        ne: 'भाषा फिल्टर खाली गर्नुहोस्',
    },
    clearCategoriesFilterButtonLabel: {
        en: 'Clear categories filter',
        ne: 'वर्ग फिल्टर खाली गर्नुहोस्',
    },
    publisherFilterLabel: {
        en: 'Publisher',
        ne: 'प्रकाशक',
    },
    clearPublisherFilterButtonLabel: {
        en: 'Clear publisher filter',
        ne: 'प्रकाशक फिल्टर खाली गर्नुहोस्',
    },
    booksFoundLabel: {
        en: '{count} book(s) found',
        ne: '{count} किताब(हरू) भेटियो',
    },
    activeSortLabel: {
        en: 'Order by: {sortLabel}',
        ne: '{sortLabel} ले अर्डर गर्नुहोस्:',
    },
    addBookButtonLabel: {
        en: 'Add New Book',
        ne: 'नयाँ किताब थप्नुहोस्',
    },
    publisherAllBooksLabel: {
        en: 'All Books',
        ne: 'सबै किताबहरू',
    },
    publisherOwnBooksLabel: {
        en: 'My Books',
        ne: 'मेरा किताबहरू',
    },
    bookListEmptyMessage: {
        en: 'No books found',
        ne: 'कुनै किताब भेटिएन',
    },
    filteredBookListEmptyMessage: {
        en: 'No books match your filter criteria',
        ne: 'कुनै पनि किताब तपाईंको फिल्टर मापदण्डसँग मेल खाँदैन',
    },
    pendingBookListMessage: {
        en: 'Loading books ...',
        ne: 'किताबहरू लोड गर्दै...',
    },
    gotoFirstPageTitle: {
        en: 'Back to first page',
        ne: 'पहिलो पृष्ठमा फर्कनुहोस्',
    },
};

export const footer = {
    tagLineLabel: {
        en: 'Where reading gets better!',
        ne: 'किताबको पहुँचबाट शिक्षाको बिकास।',
    },
    faqButtonLabel: {
        en: 'FAQs',
        ne: 'बारम्बार सोधिने प्रश्नहरू',
    },
    blogsButtonLabel: {
        en: 'Blogs',
        ne: 'ब्लगहरु',
    },
    whyKitabBazarLabel: {
        en: 'Why Kitab Bazar?',
        ne: 'किन किताब बजार?',
    },
    contactUsButtonLabel: {
        en: 'Contact Us',
        ne: 'सम्पर्क गर्नुहोस',
    },
    aboutUsLabel: {
        en: 'About Us',
        ne: 'हाम्रोबारे',
    },
    eBookLabel: {
        en: 'ebook',
        ne: 'ई-पुस्तक',
    },
    userManualLabel: {
        en: 'User Manual',
        ne: 'प्रयोगकर्ता पुस्तिका',
    },
    blogLabel: {
        en: 'Blog',
        ne: 'ब्लग',
    },
    exploreByGradeHeading: {
        en: 'Grade',
        ne: 'कक्षा',
    },
    exploreByLanguageHeading: {
        en: 'Language',
        ne: 'भाषा',
    },
    exploreByCategoryHeading: {
        en: 'Category',
        ne: 'वर्ग',
    },
    contactUsLabel: {
        en: 'Contact Us',
        ne: 'हामीलाई सम्पर्क गर्नुहोस',
    },
    contactUsDescription: {
        en: 'Have feedback about Kitab Bazar or want to know more about us?',
        ne: 'किताब बजार बारे प्रतिक्रिया छ वा हाम्रो बारेमा थप जान्न चाहनुहुन्छ?',
    },
    callUsLabel: {
        en: 'Call: +977-{phoneNumber}',
        ne: 'फोन: +977-{phoneNumber}',
    },
    sendUsEmailLabel: {
        en: 'Send us an email at {email}',
        ne: 'हामीलाई {email} मा इमेल पठाउनुहोस्',
    },
    tutorialModalHeading: {
        en: 'Video Tutorial',
        ne: 'भिडियो ट्यूटोरियल',
    },
    videoTitle: {
        en: 'Kitab Bazar Video Tutorial',
        ne: 'किताब बजार भिडियो ट्यूटोरियल',
    },
    userManualHeading: {
        en: 'User Manual',
        ne: 'प्रयोगकर्ता पुस्तिका',
    },
    userManualTitle: {
        en: 'Kitab Bazar User Manual',
        ne: 'किताब बजार प्रयोगकर्ता पुस्तिका',
    },
    supportedBy: {
        en: 'Supported By',
        ne: 'द्वारा समर्थित',
    },
    developedBy: {
        en: 'Developed By',
        ne: 'द्वारा विकसित',
    },
};

export const ebook = {
    ebookTitle: {
        en: 'Ebooks',
        ne: 'ई-पुस्तकहरू',
    },
    gotoWebSiteLabel: {
        en: 'Goto site',
        ne: 'साइटमा जानुहोस्',
    },
    gotoElibraryLink: {
        en: 'Ebook website',
        ne: 'ई-पुस्तक वेबसाइट',
    },
    ebooksErroredMessage: {
        en: 'Failed to fetch institutions having e-library',
        ne: 'ई-पुस्तकालय भएका संस्थाहरू ल्याउन असफल भयो',
    },
    noEbooksMessage: {
        en: 'There are no institutions with e-library',
        ne: 'ई-पुस्तकालय भएको कुनै संस्था छैन',
    },
};

export const notifications = {
    newOrderReceived: {
        en: 'You have just received a new {orderLink}',
        ne: 'तपाईंले भर्खरै एउटा {orderLink} प्राप्त गर्नुभएको छ',
    },
    orderCancelled: {
        en: 'Your {orderLink} has been cancelled.',
        ne: 'तपाईंको {orderLink} रद्द गरिएको छ।',
    },
    orderPacked: {
        en: 'Your {orderLink} has been packed.',
        ne: 'तपाईंको {orderLink} प्याक गरिएको छ।',
    },
    orderCompleted: {
        en: 'Your {orderLink} has been packed.',
        ne: 'तपाईंको {orderLink} पूरा भएको छ।',
    },
    emptyNotificationMessage: {
        en: 'You\'re all caught up.',
        ne: 'अहिले कुनै सूचनाहरू छैनन्',
    },
    pendingNotificationMessage: {
        en: 'Loading notifications ...',
        ne: 'सूचनाहरू लोड गर्दै ...',
    },
    notificationStatusUpdateSuccessMessage: {
        en: 'Successfully updated notification status to {newStatus}',
        ne: 'सूचना स्थिति सफलतापूर्वक {newStatus}मा अपडेट गरियो',
    },
    notificationStatusUpdateFaillureMessage: {
        en: 'Failed to update notification status',
        ne: 'सूचना स्थिति अपडेट गर्न असफल',
    },
    readStatus: {
        en: 'read',
        ne: 'पढिएको',
    },
    unseenStatus: {
        en: 'unseen',
        ne: 'नपढिएको',
    },
};

export const profile = {
    aboutTabLabel: {
        en: 'Details',
        ne: 'विवरण',
    },
    ordersTabLabel: {
        en: 'Orders',
        ne: 'अर्डरहरु',
    },
    packagesTabLabel: {
        en: 'Packages',
        ne: 'प्याकेजहरू',
    },
    paymentsTabLabel: {
        en: 'Payments',
        ne: 'भुक्तानीहरू',
    },
    reportTabLabel: {
        en: 'Reports',
        ne: 'रिपोर्टहरू',
    },
    schoolNameLabel: {
        en: 'School Name',
        ne: 'विद्यालयको नाम',
    },
    publisherNameLabel: {
        en: 'Publisher Name',
        ne: 'प्रकाशकको नाम  ',
    },
    emailLabel: {
        en: 'Email',
        ne: 'इमेल',
    },
    phoneNumberLabel: {
        en: 'Phone Number',
        ne: 'फोन नम्बर',
    },
    addressLabel: {
        en: 'Address',
        ne: 'ठेगाना',
    },
    vatNumberLabel: {
        en: 'VAT No',
        ne: 'भ्याट नम्बर',
    },
    panLabel: {
        en: 'PAN No',
        ne: 'प्यान नं',
    },
    schoolIdLabel: {
        en: 'School ID',
        ne: 'विद्यालयको आईडी',
    },
    profileLoadFailureMessage: {
        en: 'Failed to load profile',
        ne: 'प्रोफाइल लोड गर्न असफल',
    },
    pendingOrderListMessage: {
        en: 'Loading orders ...',
        ne: 'अर्डरहरु लोड गर्दै ',
    },
    emptyOrderListMessage: {
        en: 'No orders found.',
        ne: 'कुनै अर्डर भेटिएन ',
    },
    emptyBookListMessage: {
        en: 'No books found',
        ne: 'कुनै किताब भेटिएन ',
    },
    pendingBookListMessage: {
        en: 'Loading books ...',
        ne: 'किताबहरु लोड गर्दै ...',
    },
    totalAmountLabel: {
        en: 'Total Amount',
        ne: 'कुल रकम',
    },
    totalBooksLabel: {
        en: 'Total Books',
        ne: 'कुल किताबहरू',
    },
    uniqueBooksLabel: {
        en: 'Number of distinct books',
        ne: 'फरक किताबहरूको संख्या',
    },
    addedOnLabel: {
        en: 'Added On',
        ne: 'मितिमा थपियो',
    },
    amountLabel: {
        en: 'Amount',
        ne: 'रकम',
    },
    paymentTypeLabel: {
        en: 'Payment Type',
        ne: 'भुक्तानी प्रकार',
    },
    all: {
        en: 'All',
        ne: 'सबै',
    },
    idLabel: {
        en: 'ID',
        ne: 'क्र.सं',
    },
    transactionTypeLabel: {
        en: 'Transaction Type',
        ne: 'लेनदेन प्रकार',
    },
    status: {
        en: 'Status',
        ne: 'स्थिति',
    },
    noPaymentsMessage: {
        en: 'No payments available.',
        ne: 'कुनै भुक्तानी उपलब्ध छैन।',
    },
    noPaymentsSuggestion: {
        en: 'Your payments will be visible here.',
        ne: 'तपाईंको भुक्तानीहरू यहाँ देखिने छन्।',
    },
    paymentsErroredMessage: {
        en: 'Failed to fetch payments.',
        ne: 'भुक्तानीहरू प्राप्त गर्न असफल भयो।',
    },
    paymentsErroredSuggestion: {
        en: 'Please refresh the page or contact administrator.',
        ne: 'कृपया पृष्ठ रिफ्रेस गर्नुहोस् वा प्रशासकलाई सम्पर्क गर्नुहोस्।',
    },
    paymentsFilteredEmptyMessage: {
        en: 'No matching payments found.',
        ne: 'कुनै मिल्दो भुक्तानी फेला परेन।',
    },
    paymentsFilteredEmptySuggestion: {
        en: 'Please clear filters.',
        ne: 'कृपया फिल्टरहरू खाली गर्नुहोस्।',
    },
    paymentsStatusHeading: {
        en: 'Payment Status',
        ne: 'भुक्तानी स्थिति',
    },
    outstandingBalanceLabel: {
        en: 'Outstanding Balance',
        ne: 'बकाया मौज्दात',
    },
    totalCreditAmountLabel: {
        en: 'Total Credit Amount',
        ne: 'कुल क्रेडिट रकम',
    },
    totalDebitAmountLabel: {
        en: 'Total Debit Amount',
        ne: 'कुल डेबिट रकम',
    },
    institution: {
        en: 'Institution',
        ne: 'संस्था',
    },
    urlLabel: {
        en: 'Web Address',
        ne: 'वेब ठेगाना',
    },
    logoUrlLabel: {
        en: 'Logo Web Address',
        ne: 'लोगो वेब ठेगाना',
    },
    ebookLibraryLinkLabel: {
        en: 'E-library Web Address',
        ne: 'ई-पुस्तकालय वेब ठेगाना',
    },
    updateInstitutionDetail: {
        en: 'Update Institution Detail',
        ne: 'संस्थाको विवरण अपडेट गर्नुहोस्',
    },
    cancelLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
    saveLabel: {
        en: 'Save',
        ne: 'सेभ गर्नुहोस्',
    },
    updateInstitutionSuccess: {
        en: 'Successfully updated institution',
        ne: 'संस्था सफलतापूर्वक अद्यावधिक गरियो',
    },
    updateInstitutionFailureMessage: {
        en: 'Failed to update institution',
        ne: 'संस्था अद्यावधिक गर्न असफल भयो',
    },
    websiteUrl: {
        en: 'website',
        ne: 'वेबसाइट',
    },
    libraryUrl: {
        en: 'E-Library',
        ne: 'ई-लाइब्रेरी',
    },
    packageListLabel: {
        en: 'Packages',
        ne: 'प्याकेजहरू',
    },
    booksCountLabel: {
        en: 'Total Books',
        ne: 'कुल पुस्तकहरू',
    },
    totalPriceLabel: {
        en: 'Total Amount',
        ne: 'कुल रकम',
    },
    incentiveLabel: {
        en: 'Incentive',
        ne: 'प्रोत्साहन',
    },
    packageIdLabel: {
        en: 'Package ID',
        ne: 'प्याकेज आईडी',
    },
    noPackagesFound: {
        en: 'No packages available.',
        ne: 'कुनै प्याकेजहरू उपलब्ध छैन।',
    },
    viewRelatedBooks: {
        en: 'View related books',
        ne: 'सम्बन्धित पुस्तकहरू हेर्नुहोस्',
    },
    booksLabel: {
        en: 'Books',
        ne: 'किताबहरू',
    },
    exportPackage: {
        en: 'Export',
        ne: 'निर्यात गर्नुहोस्',
    },
    myBooksLabel: {
        en: 'My Books',
        ne: 'मेरो किताबहरु',
    },
    publisherBooksPendingMessage: {
        en: 'Loading books',
        ne: 'पुस्तकहरू लोड गर्दै',
    },
    publisherBooksErrorMessage: {
        en: 'Failed to load books',
        ne: 'पुस्तकहरू लोड गर्न असफल',
    },
    uploadBookModalButtonLabel: {
        en: 'Upload new book',
        ne: 'नयाँ पुस्तक अपलोड गर्नुहोस्',
    },
};

export const school = {
    profileUpdateErrorLabel: {
        en: 'Error updating school profile',
        ne: 'विद्यालय प्रोफाइल अपडेटमा समस्या',
    },
    profileUpdateSuccessLabel: {
        en: 'Successfully updated school profile',
        ne: 'विद्यालय प्रोफाइल सफलतापूर्वक अपडेट भयो ',
    },
    editSchoolProfileModalHeading: {
        en: 'Edit School Details',
        ne: 'विद्यालय विवरण सम्पादन गर्नुहोस्',
    },
    cancelLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
    saveLabel: {
        en: 'Save',
        ne: 'सेभ गर्नुहोस्',
    },
    schoolNameLabel: {
        en: 'School Name',
        ne: 'विद्यालयको नाम',
    },
    municipalityLabel: {
        en: 'Municipality',
        ne: 'नगरपालिका',
    },
    wardNumberLabel: {
        en: 'Ward Number',
        ne: 'वडा नम्बर ',
    },
    localAddressLabel: {
        en: 'Local Address',
        ne: 'स्थानीय ठेगाना',
    },
    firstNameLabel: {
        en: 'First Name',
        ne: 'पहिलो नाम',
    },
    lastNameLabel: {
        en: 'Last Name',
        ne: 'थर',
    },
    phoneNumberLabel: {
        en: 'Phone Number',
        ne: 'फोन नम्बर',
    },
    panNumberLabel: {
        en: 'PAN Number',
        ne: 'प्यान नम्बर',
    },
    vatNumberLabel: {
        en: 'VAT Number',
        ne: 'भ्याट नम्बर',
    },
    booksLabel: {
        en: 'Books',
        ne: 'किताबहरु ',
    },
    totalPriceLabel: {
        en: 'Total Price',
        ne: 'कुल रकम',
    },
    rsLabel: {
        en: 'Rs. ',
        ne: 'रु.',
    },
    statusLabel: {
        en: 'Status',
        ne: 'स्थिति',
    },
    profileDetailsHeading: {
        en: 'Profile Details',
        ne: 'प्रोफाइल विवरण',
    },
    editProfileButtonContent: {
        en: 'Edit Profile',
        ne: 'प्रोफाइल सम्पादन गर्नुहोस',
    },
    editSchoolProfileButtonContent: {
        en: 'Edit School Profile',
        ne: 'विद्यालय प्रोफाइल सम्पादन गर्नुहोस्',
    },
    nameLabel: {
        en: 'Name',
        ne: 'नाम',
    },
    emailLabel: {
        en: 'Email',
        ne: 'इमेल',
    },
    addressLabel: {
        en: 'Address',
        ne: 'ठेगाना',
    },
    myWishlistLabel: {
        en: 'Wish list',
        ne: 'मेरो इच्छा-सूची',
    },
    myCartLabel: {
        en: 'Cart',
        ne: 'मेरो कार्ट',
    },
    totalOrdersLabel: {
        en: 'Total Orders',
        ne: 'कुल अर्डरहरु ',
    },
    weeksOrderLabel: {
        en: 'This week\'s order',
        ne: 'यो हप्ताको अर्डरहरु ',
    },
    orderDetailsHeading: {
        en: 'Order Details',
        ne: 'अर्डर विवरण ',
    },
    viewMoreButtonContent: {
        en: 'View More',
        ne: 'अझ धेरै हेर्नुहोस्',
    },
    recentOrderEmptyMessage: {
        en: 'You dont have any Recent Orders',
        ne: 'तपाईंसँग कुनै हालैका अर्डरहरू छैनन्',
    },
    recentOrderEmptySuggestion: {
        en: 'Add Books that you want to buy later by clicking Add to Wishlist and then goto your Cart to place your Order',
        ne: '\'इच्छासूचीमा थप्नुहोस्\' क्लिक गरी पछि किन्न चाहनुभएको किताबहरू थप्नुहोस् र त्यसपछि अर्डर राख्नको लागि तपाईंको कार्टमा जानुहोस्',
    },
};

export const publisher = {
    profileUpdateErrorLabel: {
        en: 'Error updating publisher profile',
        ne: 'प्रकाशक प्रोफाइल अपडेटमा समस्या',
    },
    profileUpdateSuccessLabel: {
        en: 'Successfully updated publisher profile',
        ne: 'प्रकाशक प्रोफाइल सफलतापूर्वक अपडेट गरियो',
    },
    editProfileModalHeading: {
        en: 'Edit Details',
        ne: 'प्रोफाइल सम्पादन गर्नुहोस्',
    },
    cancelLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
    saveLabel: {
        en: 'Save',
        ne: 'सेभ गर्नुहोस्',
    },
    publisherNameLabel: {
        en: 'Publisher Name',
        ne: 'प्रकाशक नाम',
    },
    municipalityLabel: {
        en: 'Municipality',
        ne: 'नगरपालिका',
    },
    wardNumberLabel: {
        en: 'Ward Number',
        ne: 'वडा नम्बर ',
    },
    localAddressLabel: {
        en: 'Local Address',
        ne: 'स्थानीय ठेगाना',
    },
    firstNameLabel: {
        en: 'First Name',
        ne: 'पहिलो नाम',
    },
    lastNameLabel: {
        en: 'Last Name',
        ne: 'थर',
    },
    phoneNumberLabel: {
        en: 'Phone Number',
        ne: 'फोन नम्बर',
    },
    panNumberLabel: {
        en: 'PAN Number',
        ne: 'प्यान नम्बर',
    },
    vatNumberLabel: {
        en: 'VAT Number',
        ne: 'भ्याट नम्बर',
    },
    booksLabel: {
        en: 'Books',
        ne: 'किताबहरु ',
    },
    totalPriceLabel: {
        en: 'Total Price',
        ne: 'कुल रकम',
    },
    rsLabel: {
        en: 'Rs. ',
        ne: 'रु.',
    },
    statusLabel: {
        en: 'Status',
        ne: 'स्थिति',
    },
    profileDetailsHeading: {
        en: 'Profile Details',
        ne: 'प्रोफाइल विवरण',
    },
    editProfileButtonContent: {
        en: 'Edit Profile',
        ne: 'प्रोफाइल सम्पादन गर्नुहोस',
    },
    nameLabel: {
        en: 'Name',
        ne: 'नाम',
    },
    emailLabel: {
        en: 'Email',
        ne: 'इमेल',
    },
    addressLabel: {
        en: 'Address',
        ne: 'ठेगाना',
    },
    myWishlistLabel: {
        en: 'My Wishlist',
        ne: 'मेरो इच्छा सूची',
    },
    myCartLabel: {
        en: 'My Cart',
        ne: 'मेरो कार्ट',
    },
    totalOrdersLabel: {
        en: 'Total Orders',
        ne: 'कुल अर्डरहरु ',
    },
    weeksOrderLabel: {
        en: 'This week\'s order',
        ne: 'यो हप्ताको अर्डरहरु ',
    },
    orderDetailsHeading: {
        en: 'Order Details',
        ne: 'अर्डर विवरण ',
    },
    viewMoreButtonContent: {
        en: 'View More',
        ne: 'अझ धेरै हेर्नुहोस्',
    },
};

export const orderList = {
    pageHeading: {
        en: 'Orders',
        ne: 'अर्डरहरू',
    },
    searchPlaceholder: {
        en: 'Search by book title (3 or more characters)',
        ne: 'किताब शीर्षक द्वारा खोज्नुहोस् (३ वा बढी वर्णहरू)',
    },
    orderCountLabel: {
        en: 'Order Count',
        ne: 'अर्डर सांख्य',
    },
    orderStatusFilterLabel: {
        en: 'Order Status',
        ne: 'अर्डर स्टेटस',
    },
    clearStatusFilterButtonLabel: {
        en: 'Clear status filter',
        ne: 'स्टेटस  फिल्टर खाली गर्नुहोस्',
    },
    numOrdersLabel: {
        en: 'Order(s) found',
        ne: 'अर्डर(हरू) भेटियो',
    },
};

export const bookDetailModal = {
    bookDetailFetchErrorMessage: {
        en: 'Error while fetching book details!',
        ne: 'किताब विवरणहरू प्राप्त गर्दा समस्या!',
    },
    loadingMessage: {
        en: 'Loading...',
        ne: 'लोड गर्दै...',
    },
};

export const bookItem = {
    bookOrderFailedMessage: {
        en: 'Failed to add book to the order',
        ne: 'अर्डरमा किताब थप्न समस्या',
    },
    bookOrderSuccessMessage: {
        en: 'Book added to order',
        ne: 'किताब सफलतापूर्वक अर्डरमा थपियो',
    },
    wishlistAdditionFailedMessage: {
        en: 'Failed to add book to the wish list',
        ne: 'इच्छा-सूचीमा किताब थप्न समस्या',
    },
    wishlistAdditionSuccessMessage: {
        en: 'Book added to wishlist',
        ne: 'किताब सफलतापूर्वक इच्छा सूचीमा थपियो',
    },
    wishlistRemovalFailedMessage: {
        en: 'Failed to remove book from the wish list',
        ne: 'इच्छा-सूचीबाट किताब हटाउन समस्या',
    },
    wishlistRemovalSuccessMessage: {
        en: 'Book removed from wishlist',
        ne: 'किताब इच्छा सूचीबाट हटाइयो',
    },
    alreadyInOrderListMessage: {
        en: 'In order list',
        ne: 'क्रम सूचीमा',
    },
    addToOrderButtonLabel: {
        en: 'Add to Order',
        ne: 'अर्डरमा थप्नुहोस्',
    },
    removeFromWishlistButtonLabel: {
        en: 'Remove from Wish List',
        ne: 'इच्छा-सूचीबाट हटाउनुहोस्',
    },
    addToWishlistButtonLabel: {
        en: 'Add to Wish List',
        ne: 'इच्छा-सूचीमा राख्नुहोस्',
    },
    nprLabel: {
        en: 'NPR.',
        ne: 'ने.रू',
    },
    priceLabel: {
        en: 'Price',
        ne: 'मूल्य',
    },
    languageLabel: {
        en: 'Language',
        ne: 'भाषा',
    },
    numberOfPagesLabel: {
        en: 'Number of Pages',
        ne: 'पृष्ठहरूको संख्या',
    },
    isbnLabel: {
        en: 'ISBN',
        ne: 'आई.एस.बी.एन (ISBN)',
    },
    gradeLabel: {
        en: 'Grade',
        ne: 'कक्षा',
    },
    publisherLabel: {
        en: 'Publisher',
        ne: 'प्रकाशक',
    },
    quantityLabel: {
        en: 'Quantity',
        ne: 'मात्रा',
    },
    editionLabel: {
        en: 'Edition',
        ne: 'संस्करण',
    },
    bookPrice: {
        en: 'NPR {price}',
        ne: 'मूल्य {ने.रू}',
    },
    editDetailsButtonLabel: {
        en: 'Edit Details',
        ne: 'विवरण सम्पादन गर्नुहोस्',
    },
    categoriesLabel: {
        en: 'Categories',
        ne: 'वर्ग',
    },
    editBookLabel: {
        en: 'Edit Book',
        ne: 'पुस्तक सम्पादन गर्नुहोस्',
    },
};

export const orderItem = {
    viewDetailsLabel: {
        en: 'View order details',
        ne: 'अर्डर विवरण हेर्नुहोस्',
    },
    booksLabel: {
        en: 'Books',
        ne: 'किताबहरू',
    },
    totalPriceLabel: {
        en: 'Total price',
        ne: 'कुल रकम',
    },
    orderedByLabel: {
        en: 'Ordered By',
        ne: 'द्वारा अर्डर',
    },
    createdAtLabel: {
        en: 'Ordered On',
        ne: 'मा अर्डर गरियो',
    },
    statusLabel: {
        en: 'Status',
        ne: 'अवस्था',
    },
    nprPrefix: {
        en: 'NPR. ',
        ne: 'ने.रू .',
    },
    orderTitle: {
        en: 'Order #{code}',
        ne: 'अर्डर #{code}',
    },
    cancelOrderFailureMessage: {
        en: 'Failed to cancel order',
        ne: 'अर्डर रद्द गर्न सकिएन',
    },
    cancelOrderSuccessMessage: {
        en: 'Order cancelled successfully.',
        ne: 'अर्डर सफलतापूर्वक रद्द गरियो',
    },
    cancelPackedOrderSucessMessage: {
        en: 'Order is packed, you can not cancel the order.',
        ne: 'अर्डर प्याक गरिएको छ, तपाईं अर्डर रद्द गर्न सक्नुहुन्न।',
    },
    cancelOrderButtonLabel: {
        en: 'Cancel Order',
        ne: 'अर्डर रद्द गर्नुहोस्',
    },
    cancelOrderModalHeader: {
        en: 'Cancel Order',
        ne: 'अर्डर रद्द गर्नुहोस्',
    },
    cancelOrderModalSaveButtonLabel: {
        en: 'Save',
        ne: 'सेभ गर्नुहोस्',
    },
    cancelOrderModalCancelButtonLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
    cancelOrderModalCommentsLabel: {
        en: 'Comments',
        ne: 'टिप्पणीहरू',
    },
};

export const ordersBar = {
    booksSelectedMessage: {
        en: '{count} book(s) selected',
        ne: '{count} किताब(हरू) चयन गरियो',
    },
    totalPriceLabel: {
        en: 'Total price',
        ne: 'कुल मूल्य',
    },
    totalBooksLabel: {
        en: 'Total Books',
        ne: 'कुल किताबहरू',
    },
    viewOrdersLabel: {
        en: 'View Orders',
        ne: 'अर्डरहरू हेर्नुहोस्',
    },
    orderPlacementSuccessfulMessage: {
        en: 'Your order has been submitted successfully!',
        ne: 'तपाईंको अर्डर सफलतापूर्वक पेश गरिएको छ!',
    },
    orderPlacementFailureMessage: {
        en: 'Failed to place the order!',
        ne: 'अर्डर राख्न असफल!',
    },
    orderListHeading: {
        en: 'Order List',
        ne: 'अर्डर सूची',
    },
    orderBooksButtonLabel: {
        en: 'Order Books',
        ne: 'किताबहरू अर्डर गर्नुहोस्',
    },
    doneButtonLabel: {
        en: 'Done',
        ne: 'सम्पन्न',
    },
    orderIdLabel: {
        en: 'Order ID',
        ne: 'अर्डर आईडी',
    },
    orderPlacementHelpText: {
        en: 'We will contact you once we\'ve received the order on our end for order confirmation and payment details',
        ne: 'अर्डर पुष्टिकरण र भुक्तानी विवरणहरूको लागि अन्तमा अर्डर प्राप्त भएपछि हामी तपाईंलाई सम्पर्क गर्नेछौं',
    },
    removeFromCartErrorMessage: {
        en: 'Failed to remove current book from the cart',
        ne: 'कार्टबाट हालको किताब हटाउन असफल',
    },
    updateCartErrorMessage: {
        en: 'Failed to update the cart',
        ne: 'कार्ट अद्यावधिक गर्न असफल',
    },
    nprPrefix: {
        en: 'NPR.',
        ne: 'ने रू ',
    },
    pendingCartItemMessage: {
        en: 'Loading cart items ...',
        ne: 'कार्ट वस्तुहरू लोड गर्दै',
    },
    emptyCartMessage: {
        en: 'Your cart is empty.',
        ne: 'तपाईंको कार्ट खाली छ',
    },
    emptyCartSuggestion: {
        en: 'Please add books to your cart.',
        ne: 'कृपया आफ्नो कार्टमा किताबहरू थप्नुहोस्',
    },
};

export const newBookModal = {
    createBookModalHeading: {
        en: 'Add New Book',
        ne: 'नयाँ किताब थप्नुहोस्',
    },
    updateBookModalHeading: {
        en: 'Edit Book',
        ne: 'पुस्तक सम्पादन गर्नुहोस्',
    },
    saveButtonLabel: {
        en: 'Save',
        ne: 'सेभ गर्नुहोस्',
    },
    cancelButtonLabel: {
        en: 'Cancel',
        ne: 'रद्द गर्नुहोस्',
    },
    titleEnLabel: {
        en: 'Title (in English)',
        ne: 'शीर्षक (अंग्रेजीमा)',
    },
    titleNeLabel: {
        en: 'Title (in Nepali)',
        ne: 'शीर्षक (नेपालीमा)',
    },
    editionLabel: {
        en: 'Edition',
        ne: 'संस्करण',
    },
    gradeLabel: {
        en: 'Grade',
        ne: 'कक्षा',
    },
    descriptionEnLabel: {
        en: 'Description (in English)',
        ne: 'विवरण (अंग्रेजीमा)',
    },
    descriptionNeLabel: {
        en: 'Description (in Nepali)',
        ne: 'विवरण (नेपालीमा)',
    },
    isbnLabel: {
        en: 'ISBN',
        ne: 'आई.एस.बी.एन',
    },
    numberOfPagesLabel: {
        en: 'Number of Pages',
        ne: 'पृष्ठहरूको संख्या',
    },
    languageLabel: {
        en: 'Language',
        ne: 'भाषा',
    },
    publishedDateLabel: {
        en: 'Published Date',
        ne: 'प्रकाशित मिति',
    },
    priceLabel: {
        en: 'Price',
        ne: 'मूल्य',
    },
    categoriesLabel: {
        en: 'Categories',
        ne: 'वर्गहरू',
    },
    authorsLabel: {
        en: 'Authors',
        ne: 'लेखकहरू',
    },
    newBookUploadSuccessMessage: {
        en: 'Successfully uploaded book',
        ne: 'किताब सफलतापूर्वक अपलोड गरियो',
    },
    newBookUploadFailureMessage: {
        en: 'Failed to upload book',
        ne: 'किताब अपलोड गर्न असफल ',
    },
    bookEditSuccessMessage: {
        en: 'Successfully updated book',
        ne: 'पुस्तक सफलतापूर्वक अद्यावधिक गरियो',
    },
    bookEditFailureMessage: {
        en: 'Failed to update book',
        ne: 'पुस्तक अद्यावधिक गर्न असफल भयो',
    },
};

export const activateUser = {
    appLabel: common.kitabBazarAppLabel,
    userActivationMessage: {
        en: 'Activating User, Please wait..',
        ne: 'प्रयोगकर्ता सक्रिय गर्दै, कृपया प्रतीक्षा गर्नुहोस्',
    },
    userActivationSuccessfulMessage: {
        en: 'Sucessfully activated the user!',
        ne: 'प्रयोगकर्तालाई सफलतापूर्वक सक्रिय गरियो',
    },
    userActivationFailureMessage: {
        en: 'Failed to activate user',
        ne: 'प्रयोगकर्ता सक्रिय गर्न असफल',
    },
};

export const resetPassword = {
    resetPasswordHeaderLabel: {
        en: 'Reset Password',
        ne: 'पास्स्वोर्ड  बिर्सिए',
    },
    resetPasswordButtonLabel: {
        en: 'Reset Password',
        ne: 'पासवर्ड रिसेट गर्नुहोस् ',
    },
    emailLabel: {
        en: 'Email',
        ne: 'इमेल',
    },
    loginLabel: {
        en: 'Go back to login',
        ne: 'लगइन गर्न फर्कनुहोस्',
    },
    errorResettingPassword: {
        en: 'There was an error while trying to reset your password.',
        ne: 'तपाईको पासवर्ड रिसेट गर्दा त्रुटि भयो',
    },
    resetPasswordEmailSentLabel: {
        en: 'Successfully sent email to reset your password.',
        ne: ' तपाईको पासवर्ड रिसेट गर्न सफलतापूर्वक इमेल पठाइयो।',
    },
    passwordUpdateSuccessfulMessage: {
        en: 'Successfully updated your password.',
        ne: 'तपाईको पासवर्ड सफलतापूर्वक अपडेट गरियो।',
    },
    passwordUpdateFailureMessage: {
        en: 'Failed to update your password.',
        ne: 'तपाईंको पासवर्ड अपडेट गर्न असफल भयो।',
    },
    newPasswordLabel: {
        en: 'New Password',
        ne: 'नया पासवर्ड',
    },
    passwordConfirmationError: {
        en: 'Password doesn\'t match',
        ne: 'पासवर्ड मेल खाँदैन',
    },
    confirmPasswordInputLabel: {
        en: 'Confirm New Password',
        ne: 'नया पासवर्ड सुनिश्चित गर्नुहोस्',
    },
};
