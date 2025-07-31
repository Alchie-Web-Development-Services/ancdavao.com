import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const History: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our History"
        description="Learn about the history and journey of ANC Davao, from its humble beginnings to its current impact."
        keywords="ANC Davao history, organization history, journey, milestones, past, achievements"
      />
      <PageHeader
        title="Our History"
        subtitle="The journey of ANC Davao, from its humble beginnings to today."
        backgroundImage="https://picsum.photos/1920/1080?random=history"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4">
              The Archdiocesan Nourishment Center (ANC) was launched on May 19,
              2015, by the Archdiocese of Davao, through its Archdiocesan
              Council of the Lay Apostolate and Integrated Movements (ACLAIM).
              The center&apos;s goal is to offer comprehensive nourishment
              programs and services, including spiritual formation, medical aid
              for the impoverished, and feeding programs for malnourished
              children in Davao City.
            </p>
            <p className="mb-4">
              The ANC building, located on Pag-asa St., Fatima, Davao City,
              features an air-conditioned chapel for perpetual adoration, a
              session hall for approximately 80 people, a kitchen and dining
              hall for 100 children, and a clinic for free weekly medical and
              dental check-ups by volunteer doctors. The renovation of the
              building was generously provided by HR Construction Corporation,
              through Mr. and Mrs. Willie and Carrie Ho. This building
              previously served as a home for the sick and elderly, managed by
              the Missionaries of Charity, and was visited by Blessed Mother
              Teresa of Calcutta on two occasions over three decades ago.
            </p>
            <p className="mb-4">
              Msgr. Paul A. Cuison, then Archdiocesan Episcopal Vicar for the
              Laity, noted that the ANC was inspired by Blessed Mother
              Teresa&apos;s dedication to the poor and hungry. The launch event
              began with a Holy Eucharist celebration led by Archbishop Romulo
              G. Valles, followed by a blessing of the house. Notable guests
              included then-City Mayor Rodrigo R. Duterte, priests, lay leaders,
              and benefactors. The ANC&apos;s establishment was a response from
              the lay faithful of the archdiocese to the CBCP&apos;s declaration
              of 2014 as the year of the laity, and to Pope Francis&apos;s
              challenge to &quot;&quot;Go, do not be afraid, and
              serve.&quot;&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
