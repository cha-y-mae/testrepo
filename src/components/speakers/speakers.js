import React from 'react'
import './speakersstyle.css'


import imagecarlos from '../../assets/carlos.png'
import imagekrz from '../../assets/Krzysztof.png'
import imagefarah from '../../assets/img-farah.jpg'
import imagenargez from '../../assets/nargez.jpeg'

function speakers() {
    return (
        <div name='speakers' className='speakers'>
            <div className="container">
                <p className="welcome-text"> Artificial Intelligence (AI) research is rapidly developing in healthcare, due to its promise in improving patient
                    diagnosis, prognosis and treatment. The objective of this workshop is three-fold: (a) present, discuss, and raise
                    awareness about the state-of-the-art within prominent research themes, (b) identify challenges and new research
                    directions with leading experts, and (c) create collaborative opportunities within Abu Dhabi for the global research
                    community.</p>
                <h1>Scientific Advisory Committee</h1>
                        <div className="row">
                            <div className="column">
                            <img alt="pic" src={imagefarah} width={200} height={200}/>
                            <p className="comittee-name">Farah E. Shamout </p>
                            <p className="comittee-name">NYU Abu Dhabi</p>
                            </div>
                            <div className="column">
                            <img alt="pic" src={imagecarlos} className="speakers-img" width={200} height={200}/>
                            <p className="comittee-name">Carlos Fernandez-Granda   </p>
                            <p className="comittee-name">NYU Courant</p>
                            </div>
                            <div className="column">
                            <img alt="pic" src={imagekrz} className="speakers-img" width={200} height={200}/>
                            <p className="comittee-name">Krzysztof J. Geras </p>
                            <p className="comittee-name">NYU Langone</p>
                            </div>
                            <div className="column">
                            <img alt="pic" src={imagenargez} className="speakers-img" width={200} height={200}/>
                            <p className="comittee-name" > Narges Razavian  </p>
                            <p className="comittee-name">NYU Langone</p>
                            </div> 

                            <div className='speaker-space'> </div>
                          

                        <h1 > Speakers list </h1>

                        <ul>
                            <li>
                                <h2>Keynote Speakers</h2>
                              
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.spchopra.org"> Sumit Chopra </a> - Associate Professor, NYU Grossman School of Medicine</p>
                                <h2>Theme A: Clinical Practice and Applications</h2>
 <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.oncology.cam.ac.uk/research/our-research/crispin "> Mireia Crispin </a> - Assistant Professor, University of Cambridge</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.moore.org/people-detail?personUrl=daniely"> Daniel Yang </a> - Program Director, Moore Foundation</p>
                                <p><a style={{ fontWeight: 'bold', color:'black' }} href="https://www.clevelandclinicabudhabi.ae/en/find-a-doctor/pages/bartlomiej-piechowski-jozwiak.aspx">Bartlomiej Piechowski Jozwiak </a> - Physician, Cleveland Clinic Abu Dhabi</p>
                              
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/farah-emad-shamout.html" >Farah Shamout </a> - Assistant Professor, NYU Abu Dhabi</p>

                                <h2>Theme B: Methods & Algorithms</h2>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://cims.nyu.edu/~rajeshr/">Rajesh Ranganath </a> - Associate Professor, NYU Courant</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://mp2893.com/">Edward Choi </a> - Assistant Professor, Korea Advanced Institute of Science & Technology </p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://nyuad.nyu.edu/en/academics/divisions/engineering/faculty/yi-fang.html">Yi Fang </a> - Associate Professor, NYU Abu Dhabi</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://math.nyu.edu/~cfgranda/">Carlos Fernandez-Granda </a> - Associate Professor, NYU Courant</p>

                                <h2>Theme C: Implementation in the Clinical Setting</h2>
                                <p> <a style={{ fontWeight: 'bold', color:'black'}} href="https://dihi.org/team-member/suresh-balu/">Suresh Balu </a> - Program Director, Duke Institute for Health Innovation</p>
                               
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.researchgate.net/scientific-contributions/Mariam-Al-Harbi-2184877112">Mariam Al Harbi </a> - Research Manager, Abu Dhabi Health Services</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="http://razavian.net/">Narges Razavian </a> - Assistant Professor, NYU Langone</p>
                                    <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://scholar.google.ca/citations?hl=en&user=Q3YTKbwAAAAJ&view_op=list_works&sortby=pubdate">Cian Hughes </a> - Research Scientist, Google Health</p>

                                <h2>Theme D: Open AI & Reproducibility</h2>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://healthyml.org/marzyeh/">Marzyeh Ghassemi </a> - Assistant Professor, MIT</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://uk.linkedin.com/in/rupa-sarkar-2b446442"> Rupa Sarkar </a> - Editor-in-Chief, The Lancet Digital Health</p>
                              
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://cs.nyu.edu/~kgeras/">Krzysztof J. Geras </a> - Assistant Professor, NYU Langone</p>
                                 <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://scholar.google.com/citations?user=QcOG6sgAAAAJ&hl=en"> Pranav Rajpurkar</a> - Assistant Professor, Harvard University</p>
                              

                                <h2>Theme E: Knowledge Mobilization</h2>
                               
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.researchgate.net/profile/Louis-Atallah">Louis Atallah </a> - R&D Lead, Philips Healthcare</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://mbzuai.ac.ae/study/faculty/mohammad-yaqub/">Mohammad Yaqub </a> - Assistant Professor, Mohamed bin Zayed University of Artificial Intelligence</p>
                                 <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://eng.ox.ac.uk/people/ghadeer-ghosheh/">Ghadeer Ghosheh </a> - PhD Candidate, University of Oxford</p>
                                <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.linkedin.com/in/skhanshadab/"> Shadab Khan </a> - Director of AI and Applied Science, G42 Healthcare </p>
                                    <p><a style={{ fontWeight: 'bold', color:'black'}} href="https://www.nuriaoliver.com"> Nuria Oliver </a> - Co-founder and vice-president, European Laboratory of Learning and Intelligent Systems </p>
                            </li>
                        </ul>

           
            </div>
        </div>
        </div>
    )
}

export default speakers



