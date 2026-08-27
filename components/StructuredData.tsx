const siteUrl='https://laurinekarrer.com';

export function StructuredData(){
  const data={
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'WebSite','@id':`${siteUrl}/#website`,url:siteUrl,
        name:'Laurine Karrer',alternateName:'Laurine Karrer Mentorship',
        inLanguage:'en',publisher:{'@id':`${siteUrl}/#person`}
      },
      {
        '@type':'Person','@id':`${siteUrl}/#person`,name:'Laurine Karrer',url:siteUrl,
        jobTitle:'Certified Sophrologist and Body-Based Therapist',
        knowsLanguage:['English','French'],
        sameAs:['https://www.instagram.com/laurine.karrer/'],
        knowsAbout:['Sophrology','Dynamic relaxation','Breathwork','Body awareness','Therapeutic massage','Stress management']
      },
      {
        '@type':['ProfessionalService','HealthAndBeautyBusiness'],'@id':`${siteUrl}/#practice`,
        name:'Laurine Karrer — Sophrologist in Amsterdam',url:siteUrl,
        description:'Sophrology, therapeutic and ritual massage, body awareness and breathwork in Amsterdam and online.',
        founder:{'@id':`${siteUrl}/#person`},
        address:{'@type':'PostalAddress',streetAddress:'Hazenstraat 51',postalCode:'1016 SN',addressLocality:'Amsterdam',addressCountry:'NL'},
        areaServed:{'@type':'City',name:'Amsterdam'},
        availableLanguage:['English','French'],
        sameAs:['https://www.instagram.com/laurine.karrer/'],
        hasOfferCatalog:{'@type':'OfferCatalog',name:'Sophrology and body-based services',itemListElement:[
          {'@type':'Offer',itemOffered:{'@type':'Service',name:'Sophrology Session',serviceType:'Sophrology',areaServed:'Amsterdam'}},
          {'@type':'Offer',itemOffered:{'@type':'Service',name:'Body Ritual Massage',serviceType:'Therapeutic and ritual massage',areaServed:'Amsterdam'}},
          {'@type':'Offer',itemOffered:{'@type':'Service',name:'Face Ritual Massage',serviceType:'Facial massage',areaServed:'Amsterdam'}},
          {'@type':'Offer',itemOffered:{'@type':'Service',name:'Sophrology Breathwork',serviceType:'Breathwork class',areaServed:'Amsterdam'}}
        ]}
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>;
}
