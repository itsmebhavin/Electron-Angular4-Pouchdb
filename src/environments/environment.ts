export const environment = {
  production: false,
  EnvName: 'dev',
  configFile: 'config/config.dev.json',
  ApplicationHeader: 'eForms',
    SubHeader: 'Powered by UFP',
    Copyright: 'Center for Advanced Public Safety',
    CopyrightYear: '2017',
    Themes: {
        material: 'lib/bs4-themes/material.css',
        darkly: 'lib/bs4-themes/darkly.css',
        pulse: 'lib/bs4-themes/pulse.css',
        simplex: 'lib/bs4-themes/simplex.css'
    },
    DefaultTheme: 'pulse',
    PouchDBDebugMode: false,
    RemoteCouchDBUrl: 'http://ufpdbuser:20x2nc2lp90l@localhost:5984/',
    RemoteCouchCitationDBName: 'ufp_citationdata',
    RemoteCouchReferenceDBName: 'ufp_referencedata',
    FakeUserName: 'jdoe',
    ContactUs: 'ASP Support Email',
    Angular2_Logger: 5
};
