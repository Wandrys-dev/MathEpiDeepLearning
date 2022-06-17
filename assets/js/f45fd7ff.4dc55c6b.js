"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[378],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return u}});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(i),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return i?a.createElement(h,r(r({ref:t},c),{},{components:i})):a.createElement(h,r({ref:t},c))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<n;s++)r[s]=i[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8560:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=i(7462),o=i(3366),n=(i(7294),i(3905)),r=["components"],p={sidebar_position:1},l=void 0,s={unversionedId:"EpiRepos/EpidemicRepos",id:"EpiRepos/EpidemicRepos",title:"EpidemicRepos",description:"reichlab/covid19-forecast-hub: Projections of COVID-19, in standardized format",source:"@site/docs/EpiRepos/EpidemicRepos.md",sourceDirName:"EpiRepos",slug:"/EpiRepos/EpidemicRepos",permalink:"/MathEpiDeepLearning/docs/EpiRepos/EpidemicRepos",editUrl:"https://github.com/Song921012/MathEpiDeepLearning/docs/EpiRepos/EpidemicRepos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"1. Basics of data visulization, Grammar of graph",permalink:"/MathEpiDeepLearning/docs/DataVisualization/dataviz"},next:{title:"References Searching",permalink:"/MathEpiDeepLearning/docs/HowToResearch/References"}},c={},m=[],d={toc:m};function u(e){var t=e.components,i=(0,o.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reichlab/covid19-forecast-hub"},"reichlab/covid19-forecast-hub: Projections of COVID-19, in standardized format")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/midas-network/COVID-19"},"midas-network/COVID-19: 2019 novel coronavirus repository")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Priesemann-Group/covid19_inference_forecast"},"Priesemann-Group/covid19_inference_forecast")),(0,n.kt)("p",null,"Julia: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/epirecipes/sir-julia"},"epirecipes/sir-julia: Various implementations of the classical SIR model in Julia")),(0,n.kt)("p",null,"R: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/EpiModel/EpiModel"},"EpiModel/EpiModel: Mathematical Modeling of Infectious Disease Dynamics")),(0,n.kt)("h1",{id:"compartment-models"},"Compartment Models"),(0,n.kt)("p",null,"Python:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/uiuc-covid19-modeling/pydemic"},"uiuc-covid19-modeling/pydemic: a python driver for epidemic modeling and inference")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/I-Bouros/multi-epi-model-cross-analysis"},"I-Bouros/multi-epi-model-cross-analysis: A collection of multiple epidemiological models used in the modelling of cases observed during the COVID-19 pandemic.")),(0,n.kt)("p",null,"Julia"),(0,n.kt)("p",null,"Include data cleaning",(0,n.kt)("a",{parentName:"p",href:"https://github.com/berndblasius/Covid19"},"berndblasius/Covid19: Wang et al SEIR-like model for 2019/20 Covid-19 outbreak")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/jtmatamalas/MMCAcovid19.jl"},"jtmatamalas/MMCAcovid19.jl: Microscopic Markov Chain Approach to model the spreading of COVID-19")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/affans/covid-19-lancetid"},"affans/covid-19-lancetid: A clone of Peter Jentsch's covid19 model")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/uncomfyhalomacro/covid19_mindanao_seir_model"},"uncomfyhalomacro/covid19_mindanao_seir_model: COVID19 SEIR model in Mindanao, Philippines using Julia")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/schrimpf/CovidSEIR.jl"},"schrimpf/CovidSEIR.jl: Bayesian estimation of a SEIR model or Corona Virus")),(0,n.kt)("p",null,"R:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ImperialCollegeLondon/epidemia"},"ImperialCollegeLondon/epidemia: epidemia package")),(0,n.kt)("h1",{id:"agent-based-modelling"},"Agent based modelling"),(0,n.kt)("p",null,"Julia:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/jangevaare/Pathogen.jl"},"jangevaare/Pathogen.jl: Simulation, visualization, and inference tools for modelling the spread of infectious diseases with Julia")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/affans/covid19abm.jl"},"affans/covid19abm.jl: Agent Based Model for COVID 19 transmission dynamics")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/thomasvilches/vac_covid_ontario"},"thomasvilches/vac_covid_ontario")),(0,n.kt)("p",null,"good",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ETACE/ace_covid19"},"ETACE/ace_covid19: An integrated agent-based economic and epidemiological model of the COVID-19 pandemic.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/thomasvilches/multiple_strains"},"thomasvilches/multiple_strains")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/IgorDouven/COVID.jl"},"IgorDouven/COVID.jl: Julia code for agent-based model of COVID-19 outbreaks and possible intervention strategies")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/werzum/COVID19-ABM"},"werzum/COVID19-ABM: An Agent-Based model of the COVID-19 spread in Germany")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/kkmann/cov19sim"},"kkmann/cov19sim: agent-based simulation of covid-19 for small populations")),(0,n.kt)("p",null,"Python:"),(0,n.kt)("p",null,"Good",(0,n.kt)("a",{parentName:"p",href:"https://github.com/InstituteforDiseaseModeling/covasim"},"InstituteforDiseaseModeling/covasim: COVID-19 Agent-based Simulator (Covasim): a model for exploring coronavirus dynamics and interventions")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/petroniocandido/COVID19_AgentBasedSimulation"},"petroniocandido/COVID19_AgentBasedSimulation: COVID-ABS: An Agent-Based Model of COVID-19 Epidemic to Simulate Health and Economic Effects of Social Distancing Interventions")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/BDI-pathogens/OpenABM-Covid19"},"BDI-pathogens/OpenABM-Covid19: OpenABM-Covid19: an agent-based model for modelling the spread of SARS-CoV-2 (coronavirus) and control interventions for the Covid-19 epidemic")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/worldbank/covid19-agent-based-model"},"worldbank/covid19-agent-based-model: This repository contains the Python implementation of the agent-based model used to model the spread of COVID-19.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/maplerainresearch/covid19-sim-mesa"},"maplerainresearch/covid19-sim-mesa: COVID-19 infection multi-agent simulation using Mesa framework")),(0,n.kt)("p",null,"Matlab:"),(0,n.kt)("h1",{id:"network-model"},"Network Model"),(0,n.kt)("p",null,"Julia:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/bridgewalker/Fastnet.jl"},"bridgewalker/Fastnet.jl")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/csimal/NetworkEpidemics.jl"},"csimal/NetworkEpidemics.jl: A Small package for simulating epidemic spreading on networks, including a generic Gillespie algorithm and Mean Field Approximations")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EdMHill/covid19_uni_network_model"},"EdMHill/covid19_uni_network_model")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EdMHill/covid19_worker_network_model"},"EdMHill/covid19_worker_network_model")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/lquante/social_agent_based_modelling/tree/606f5ec1ed51781926b7891f67f87ac4404c7d57/scripts"},"social_agent_based_modelling/scripts at 606f5ec1ed51781926b7891f67f87ac4404c7d57 \xb7 lquante/social_agent_based_modelling")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/csimal/temporal-networks"},"csimal/temporal-networks")),(0,n.kt)("p",null,"Python:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ryansmcgee/seirsplus"},"ryansmcgee/seirsplus: Models of SEIRS epidemic dynamics with extensions, including network-structured populations, testing, contact tracing, and social distancing.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alsnhll/COVID19NetworkSimulations"},"alsnhll/COVID19NetworkSimulations: Public repository for stochastic network simulations of COVID19 dynamics")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/COVID-IWG/epimargin"},"COVID-IWG/epimargin: networked, stochastic SIRD epidemiological model with Bayesian parameter estimation and policy scenario comparison tools")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/springer-math/Mathematics-of-Epidemics-on-Networks"},"springer-math/Mathematics-of-Epidemics-on-Networks: Source code accompanying 'Mathematics of Epidemics on Networks' by Kiss, Miller, and Simon http://www.springer.com/us/book/9783319508047 . Documentation for the software package is at https://epidemicsonnetworks.readthedocs.io/en/latest/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/simoninireland/epydemic"},"simoninireland/epydemic: Epidemic processes on networks in Python")),(0,n.kt)("p",null,"R:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EpiModel/EpiModel-Gallery"},"EpiModel/EpiModel-Gallery: Gallery of Network-Based Epidemic Model Templates for EpiModel")),(0,n.kt)("h1",{id:"partial-differential-model"},"Partial Differential Model"),(0,n.kt)("p",null,"Julia:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/R-DjidjouDemasse/Age-structured-model-COVID19-Julia-code"},"R-DjidjouDemasse/Age-structured-model-COVID19-Julia-code: Age-structured non-pharmaceutical interventions for optimal control of COVID-19 epidemic by Q. Richard, S. Alizon, M. Choisy, M.T. Sofonea, R. Djidjou-Demasse")),(0,n.kt)("h1",{id:"epiforecasting"},"Epiforecasting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reichlab"},"The Reich Lab at UMass-Amherst")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reichlab/covid19-forecast-hub"},"reichlab/covid19-forecast-hub: Projections of COVID-19, in standardized format")),(0,n.kt)("h1",{id:"social-contact-matrix"},"Social Contact Matrix"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sbfnk/epimixr"},"sbfnk/epimixr: Epidemiological analysis using social mixing matrices")),(0,n.kt)("h1",{id:"rt"},"Rt"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/epiforecasts/covid-rt-estimates"},"epiforecasts/covid-rt-estimates: National and subnational estimates of the time-varying reproduction number for Covid-19")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://epiforecasts.io/EpiNow2/"},"Estimate Real-Time Case Counts and Time-Varying Epidemiological Parameters \u2022 EpiNow2")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrc-ide/EpiEstim"},"mrc-ide/EpiEstim: A tool to estimate time varying instantaneous reproduction number during epidemics")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/lo-hfk/epyestim"},"lo-hfk/epyestim: Python package to estimate the time-varying effective reproduction number of an epidemic from reported case numbers")))}u.isMDXComponent=!0}}]);