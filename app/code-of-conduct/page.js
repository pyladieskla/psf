import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import SectionEyebrow from "@/components/SectionEyebrow";

export const metadata = {
  title: "Code of Conduct - PyLadies Kampala Refugee Python Skills Workshop",
  description: "The PyLadies Kampala Code of Conduct for the Refugee Python Skills Workshop.",
};

const EXPECTED_BEHAVIOUR = [
  "Be respectful and considerate of others.",
  "Use welcoming and inclusive language.",
  "Be open to different viewpoints and experiences.",
  "Give constructive feedback.",
  "Be patient and supportive of beginners.",
  "Respect personal boundaries and privacy.",
  "Ask for consent before taking or sharing photographs or recordings where appropriate.",
  "Help create an environment where everyone feels comfortable asking questions, learning, and participating.",
];

const UNACCEPTABLE_BEHAVIOUR = [
  "Harassment, intimidation, bullying, or stalking.",
  "Unwelcome sexual attention or advances.",
  "Offensive or discriminatory comments.",
  "Unwanted physical contact.",
  "Invasive photography or recording.",
  "Publishing someone's private information without their permission.",
  "Deliberately disrupting workshops, talks, or other activities.",
  "Any behaviour that creates an unsafe, hostile, or unwelcoming environment.",
];

const ENFORCEMENT_ACTIONS = [
  "Speak privately with the individuals involved.",
  "Provide support to affected participants.",
  "Issue a warning.",
  "Ask an individual to leave a session or the event.",
  "Remove someone from event or online community spaces.",
  "Contact the appropriate authorities where necessary.",
];

const TEAM = [
  "Deborah Lanyero",
  "Asio Brenda",
  "Fanny Nyacic",
  "Maureen Jada",
  "Iyabo Monica",
  "Syda Namugarura",
];

const SCOPE = [
  "The PyLadies Kampala Open Source Summit.",
  "Workshops and meetups.",
  "Talks and networking activities.",
  "Official online communication spaces.",
  "Other activities where someone is representing PyLadies Kampala.",
];

export default function CodeOfConduct() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="bg-brand-dark px-6 py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-amber-light">
              Our Standards
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              PyLadies Kampala Code of Conduct
            </h1>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Our Community</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>
                We are committed to creating a safe and respectful learning environment for
                everyone, including participants from refugee, displaced, underserved, and
                marginalised communities. Everyone should be able to participate regardless of
                their background, nationality, language, gender, disability, or level of
                technical experience.
              </p>
              <p>
                All participants, speakers, mentors, organisers, volunteers, and partners are
                expected to treat one another with respect and courtesy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-amber-tint px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Expected Behaviour</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              We expect everyone participating in our events and community spaces to:
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {EXPECTED_BEHAVIOUR.map((item) => (
                <li key={item} className="flex items-start gap-2 text-brand-dark">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Unacceptable Behaviour</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              Harassment and discrimination are not tolerated at PyLadies Kampala events.
              Unacceptable behaviour includes, but is not limited to:
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {UNACCEPTABLE_BEHAVIOUR.map((item) => (
                <li key={item} className="flex items-start gap-2 text-brand-dark">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-xl text-sm text-brand-dark-soft">
              This applies regardless of gender, gender identity or expression, sexual
              orientation, disability, age, race, ethnicity, religion, nationality, or any other
              personal characteristic.
            </p>
          </div>
        </section>

        <section className="bg-brand-dark px-6 py-16 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-amber-light">
              Reporting a Concern
            </p>
            <div className="mt-6 space-y-4 text-left text-white/75 sm:text-center">
              <p>
                If you experience or witness behaviour that violates this Code of Conduct,
                please report it to a member of the PyLadies Kampala organising team.
              </p>
              <p>
                You can speak privately to any member of the Code of Conduct Enforcement Team
                during the event.
              </p>
              <p>
                You may also report an incident by email:{" "}
                <a href="mailto:kampala@pyladies.com" className="font-semibold underline">
                  kampala@pyladies.com
                </a>
              </p>
              <p>You do not need to confront the person involved before making a report.</p>
              <p>
                We will handle reports as confidentially as possible and will take appropriate
                steps to address the situation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-amber-tint px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Enforcement</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              Participants asked to stop inappropriate behaviour are expected to comply
              immediately. Depending on the circumstances, the organisers may:
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {ENFORCEMENT_ACTIONS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-brand-dark">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Code of Conduct Enforcement Team</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              The PyLadies Kampala Code of Conduct Enforcement Team consists of:
            </p>
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
              {TEAM.map((name) => (
                <span
                  key={name}
                  className="rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-brand-dark-soft">
              Participants may approach any member of the team with a concern.
            </p>
          </div>
        </section>

        <section className="bg-brand-amber-tint px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Scope</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              This Code of Conduct applies to PyLadies Kampala events and activities, including:
            </p>
            <ul className="mx-auto mt-8 max-w-xl space-y-2 text-left">
              {SCOPE.map((item) => (
                <li key={item} className="flex items-start gap-2 text-brand-dark">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-xl text-brand-dark-soft">
              Our goal is to ensure that everyone can participate in our community in a safe,
              respectful, and welcoming environment.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark px-6 py-10 text-center text-sm text-white/60">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <p>
            A PyLadies Kampala program. Report concerns to{" "}
            <a href="mailto:kampala@pyladies.com" className="underline">
              kampala@pyladies.com
            </a>
            .
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
