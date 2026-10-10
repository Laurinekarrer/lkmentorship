const siteUrl='https://laurinekarrer.com';

export function StructuredData(){
  const data={
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'WebSite','@id':`${siteUrl}/#website`,url:siteUrl,
        name:'Laurine Karrer Studio',alternateName:'Laurine Karrer',
        inLanguage:'en',publisher:{'@id':`${siteUrl}/#person`}
      },
      {
        '@type':'Person','@id':`${siteUrl}/#person`,name:'Laurine Karrer',url:siteUrl,
        jobTitle:'Certified Sophrologist and Body-Based Therapist',
        knowsLanguage:['English','French'],
        sameAs:['https://www.instagram.com/laurine.karrer/','https://www.google.com/maps/place/Laurine+Karrer+Studio/@52.3699801,4.8804849,17z/data=!4m8!3m7!1s0x47c609d42f56af83:0x155fb79bbf59f6fe!8m2!3d52.3699801!4d4.8804849!9m1!1b1!16s%2Fg%2F11zyml_wxh'],
        knowsAbout:['Sophrology','Dynamic relaxation','Breathwork','Body awareness','Therapeutic massage','Stress management']
      },
      {
        '@type':['ProfessionalService','HealthAndBeautyBusiness'],'@id':`${siteUrl}/#practice`,
        name:'Laurine Karrer Studio',alternateName:'Laurine Karrer — Sophrologist in Amsterdam',url:siteUrl,
        description:'Sophrology, therapeutic and ritual massage, body awareness and breathwork in Amsterdam and online.',
        founder:{'@id':`${siteUrl}/#person`},
        address:{'@type':'PostalAddress',streetAddress:'Hazenstraat 53',postalCode:'1016 SN',addressLocality:'Amsterdam',addressCountry:'NL'},
        areaServed:{'@type':'City',name:'Amsterdam'},
        availableLanguage:['English','French'],
        sameAs:['https://www.instagram.com/laurine.karrer/','https://www.google.com/maps/place/Laurine+Karrer+Studio/@52.3699801,4.8804849,17z/data=!4m8!3m7!1s0x47c609d42f56af83:0x155fb79bbf59f6fe!8m2!3d52.3699801!4d4.8804849!9m1!1b1!16s%2Fg%2F11zyml_wxh'],
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
