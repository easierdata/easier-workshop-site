export default function About(): JSX.Element {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, #039876, #fff)`
            }}
            id="about"
            className="py-6 mt-24"
        >
            <div className="pt-6 bg-white mx-6 md:mx-12 rounded-lg">
                <div>
                    <h1 className='text-4xl font-bold text-center mt-3'>About</h1>
                    <div className="p-4 text-lg">
                        <p>Open science has emerged as a top priority for ensuring the robustness of the scientific enterprise, especially as research becomes increasingly dependent on computational workflows and large heterogeneous data sources. This is especially true for the geospatial sciences that are dependent upon massive amounts of location-based data, such as remotely sensed images, demographic profiles, environmental field samples, climate simulations, land parcel and building footprint records, the status of telecommunication and transportation infrastructure, and geotagged social media posts. Data sources are continuously being combined and accumulated in order to conduct complex analyses in support of decision-making where location matters. Some examples include responding to natural disasters and extreme weather, developing strategies for climate change mitigation and adaptation, promoting sustainable, just, and optimized cities, and ensuring national security.</p>
                        <br />
                        <p>The full spectrum of “openness” is diverse and typically includes the transparent use of data and methods, access to resources and training, and inclusivity within the scientific process. Furthermore, the openness of science is directly related to the important issues of reproducibility and replicability (R&R). A lack of R&R is associated with: (i) the inability to access the resources necessary for computational data-intensive workflows; (ii) the inability to interact with research artifacts for veracity and educational purposes; (iii) the inability to obtain the same or similar results for the same or similar data and methods. One result is that the pace of scientific progress is stifled because resources are not widely available and it is challenging to learn from and build on the work of one another. A recent report by the US National Academy of Sciences underscores the gravity of the issue and recent attention has highlighted the additional complexity for R&R in the geographical sciences. Great efforts have been put towards increasing R&R in the geospatial sciences and science more generally, yet the exponential growth in both the volume of data and the demand for computing resources raises new challenges for ensuring the geospatial sciences remain open.</p>
                        <br />
                        <p>In particular, decentralized practices and technology, such as web protocols, blockchain, and smart contracts can increase the openness of the geospatial sciences and facilitate reproducibility and replicability. For instance, content-addressing helps avoid ‘link rot’ by allowing files to be referenced by a unique hash based on the content of a file itself, rather than location, so that the file can be sustainably referenced on the web regardless of where it is stored. Content-addressing can also ensure file integrity because a change in a file also changes the hash used to reference it. Distributed systems for sharing files based on content-addressing facilitates a more connected and optimal user-to-user network of content delivery rather than a hub-and-spoke system of file requests. Meanwhile, blockchain and smart contracts make it possible to incorporate transparent, trustless, and consensus-based layers into the data ecosystem. However, many decentralized technologies are still nascent and their adoption, especially in the geospatial domain, are still limited. Thus, an important and timely question is “How might an emerging decentralized geospatial web support the geospatial sciences to become more open, transparent, reproducible, and robust?”.</p>
                        <br />
                        <p>Towards answering this question, this workshop will bring together domain experts from the geospatial sciences, open science best-practices, and the decentralized web ecosystem to better understand the current state-of-the-art and how these three areas can come together to imagine possible future pathways for the next generation of open geospatial science. The primary output will be an executive summary of the event that outlines an agenda for future research and collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}