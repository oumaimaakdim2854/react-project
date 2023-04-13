import Icon from "./Icon";

const Contact=()=>{

/*const data=[
{id:1,
        src:"./facebook-messenger-logo-icon-facebook-picture-e2638162787d2cd8dbcdb5424d3913a5.png",
alt:"facebook",
href:""},
{id:2,
        src:"./gmail-google-logo-email-computer-icons-gmail-c5b55d04be081fff14f483d6f6b118f2.png",
alt:"gmail",
href:""},{id:3,
        src:"./social-media-marketing-logo-blog-advertising-instagram-8262f73e5bad1b3a03186b491e9ad87c.png",
alt:"instagram",
href:"https://www.instagram.com/akdimoumaima28/"},{id:4,
        src:"./5bbf4bcd44bbe-35dbec106cc36e5ac36df475379c8c85.png",
alt:"linkedin",
href:""},{id:5,
        src:"./8v60lvjleujlv6h2k21i3uiqo5-7c66295ca706809b53207ae6dd8f28de.png",
alt:"twitter",
href:""}
]*/

    return(
        <section id="contact" className="CONTACT">
        <div className="title">CONTACT <span>ME</span></div>
        <div className="contacts">
                {/* {
                       data.map(it=><Icon key={it.id} src={it.src} href={it.href} alt={it.alt}/>) 
                } */}

        
                    <Icon src="./facebook-messenger-logo-icon-facebook-picture-e2638162787d2cd8dbcdb5424d3913a5.png" href="" alt="facebook"/>
                    <Icon src="./gmail-google-logo-email-computer-icons-gmail-c5b55d04be081fff14f483d6f6b118f2.png" href="" alt="gmail"/>
                    <Icon src="./social-media-marketing-logo-blog-advertising-instagram-8262f73e5bad1b3a03186b491e9ad87c.png"href="https://www.instagram.com/akdimoumaima28/" alt="instagram"/>
                    <Icon src="./5bbf4bcd44bbe-35dbec106cc36e5ac36df475379c8c85.png" href="" alt="linkedin"/>
                    <Icon src="./8v60lvjleujlv6h2k21i3uiqo5-7c66295ca706809b53207ae6dd8f28de.png" href="" alt="twitter"/> 
        </div>
    </section>
    )
}
export default  Contact;