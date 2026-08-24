import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfozBLWEKCDk5I3ikK0aSz938gwHCWqaHbmNJ2iiZcyTT6MOA/viewform?usp=publish-editor";

const STATS = [
  { number: "100", label: "Refugee Participants Expected" },
  { number: "10", label: "Mentors" },
  { number: "10:1", label: "Participant to Mentor Ratio" },
  { number: "7", label: "Hours of Hands-On Learning" },
];

const CURRICULUM = [
  "Python fundamentals",
  "Variables and data types",
  "Conditions and loops",
  "Functions",
  "Working with data",
  "Problem solving with Python",
  "Building a simple practical project",
  "Where to go next with Python",
];

const WHO_ITS_FOR = [
  "Beginners who have never programmed before",
  "Students",
  "Young people interested in technology",
  "People looking to develop new skills",
  "Aspiring developers",
  "Refugees interested in future opportunities in technology",
];

const SUPPORTERS = ["Python Software Foundation", "Africa's Talking", "MTN Foundation", "Propel"];

function SectionEyebrow({ children }) {
  return (
    <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-amber">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="bg-brand-dark px-6 py-20 text-center text-white md:py-28">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-md bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
              Arua, Uganda &middot; 2026
            </span>
            <p className="mt-6 font-display text-xl font-medium text-brand-amber-light">
              Creating pathways through technology.
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              PyLadies Kampala Refugee Python Skills Workshop
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
              A hands-on Python workshop bringing practical programming skills and new
              opportunities to refugees in Arua.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-brand-amber px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-amber-dark"
              >
                Register for the Workshop
              </a>
              <a
                href="#about"
                className="rounded-md border-2 border-white px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-dark"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-black/5 bg-white px-6 py-12">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-display text-4xl font-bold text-brand-amber">
                  {s.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-dark-soft">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>About the Workshop</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>
                The PyLadies Kampala Refugee Python Skills Workshop is a practical,
                beginner-friendly workshop designed to introduce refugees in Arua to Python
                programming and help them take their first steps into technology.
              </p>
              <p>
                The workshop will focus on learning by doing. Participants will work through
                practical Python exercises, solve problems, and build their understanding of
                programming with support from experienced mentors.
              </p>
              <p>
                Our goal is to make technology learning more accessible and show participants
                that programming is a skill they can continue developing beyond the workshop.
              </p>
            </div>
          </div>
        </section>

        {/* OUR WORK IN ARUA */}
        <section className="bg-brand-amber-tint px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Our Work in Arua</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>
                Our work in Arua grew from our desire to take technology education beyond
                Kampala and reach communities that have had fewer opportunities to access it.
              </p>
              <p>
                Through our Python Web Development Bootcamp, we worked with refugees and
                members of the local community over several weeks, introducing them to Python
                and web development through practical training. Participants learned
                programming fundamentals, built websites, and worked on projects with the
                support of mentors and coaches.
              </p>
              <p>
                The experience showed us the enthusiasm and potential within the community and
                encouraged us to continue creating opportunities for refugees to develop
                practical technology skills.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE'LL DO */}
        <section id="curriculum" className="scroll-mt-20 bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>What We&apos;ll Do</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-2xl text-brand-dark-soft">
              This workshop will give participants a practical introduction to Python.
              Throughout the day, participants will learn through short explanations followed
              by hands-on exercises. They will work with Python code, solve simple problems,
              and build small projects as they learn. The sessions will cover:
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CURRICULUM.map((item, i) => (
                <div
                  key={item}
                  className="rounded-md border border-black/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-amber-tint font-display text-sm font-bold text-brand-amber-dark">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-semibold text-brand-dark">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-brand-dark-soft">
              The workshop will include approximately 7 hours of hands-on learning.
            </p>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="bg-brand-dark px-6 py-20 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-amber-light">
              Who Is It For?
            </p>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              This workshop is specifically for refugees in Arua and surrounding communities
              who are interested in learning technology. It is especially suitable for:
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {WHO_ITS_FOR.map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-xl font-bold">
              No previous Python experience is required.
            </p>
          </div>
        </section>

        {/* LEARN WITH MENTORS */}
        <section id="mentors" className="scroll-mt-20 bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Learn With Mentors</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>Participants won&apos;t have to learn on their own.</p>
              <p>
                The workshop will be supported by mentors from PyLadies Kampala and the wider
                Python community. Our mentors have experience teaching Python, supporting
                beginners, and running community technology workshops.
              </p>
              <p>
                With approximately 100 participants and 10 mentors, we aim for a 10:1
                participant-to-mentor ratio, giving participants an opportunity to ask
                questions and receive help during the practical sessions.
              </p>
            </div>
          </div>
        </section>

        {/* WHY PYTHON */}
        <section className="bg-brand-amber-tint px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Why Python?</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>
                Python is one of the most widely used programming languages and is used in
                areas such as web development, data science, automation, and artificial
                intelligence.
              </p>
              <p>
                For beginners, it also provides a practical starting point for learning how to
                think computationally and build technology.
              </p>
              <p className="font-semibold text-brand-dark">
                Our aim isn&apos;t to turn participants into professional developers in one day.
                It&apos;s to give them a starting point and the confidence to keep learning.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT COMES NEXT */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>What Comes Next?</SectionEyebrow>
            <div className="mt-6 space-y-4 text-left text-brand-dark-soft sm:text-center">
              <p>The workshop is intended to be more than a one-day learning experience.</p>
              <p>
                After the workshop, participants will be encouraged to continue developing
                their skills through online learning, PyLadies Kampala community activities,
                mentorship, and future training opportunities.
              </p>
              <p>
                We hope to connect participants with the wider Python community so they can
                continue learning, meet other developers, and discover opportunities they may
                not have known about before.
              </p>
            </div>
          </div>
        </section>

        {/* FROM LEARNING TO OPPORTUNITY */}
        <section className="bg-brand-dark px-6 py-20 text-center text-white">
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-amber-light">
              From Learning to Opportunity
            </p>
            <div className="mt-6 space-y-4 text-white/75">
              <p>For us, this workshop is about more than teaching Python.</p>
              <p>
                It is about creating an opportunity for someone who may not otherwise have
                access to programming education to discover a new skill, meet people in
                technology, and see what might be possible for them.
              </p>
              <p>We want participants to leave the workshop thinking:</p>
            </div>
            <p className="mt-8 font-display text-2xl font-bold sm:text-3xl">
              &ldquo;I can learn this. I can build something. I can keep going.&rdquo;
            </p>
          </div>
        </section>

        {/* SUPPORTED BY */}
        <section id="supporters" className="scroll-mt-20 bg-white px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Supported By</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-xl text-brand-dark-soft">
              We have ongoing collaborations with Africa&apos;s Talking, MTN Foundation, and
              Propel, who have supported our community activities through venue support, media
              and communications, training activities, and other event logistics. The Python
              Software Foundation is acknowledged as a supporting sponsor of this workshop.
            </p>
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
              {SUPPORTERS.map((name) => (
                <span
                  key={name}
                  className="rounded-md border-t-4 border-brand-amber bg-white px-6 py-4 text-sm font-bold text-brand-dark shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN US */}
        <section id="join" className="scroll-mt-20 bg-brand-amber px-6 py-20 text-center text-white">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Join Us</h2>
            <p className="mt-4 text-white/90">
              Come learn Python, meet mentors, and take your first step into programming.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-md bg-brand-dark px-8 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black"
            >
              Register for the Workshop
            </a>
            <p className="mt-6 text-sm text-white/90">
              Questions?{" "}
              <a href="mailto:kampala@pyladies.com" className="font-semibold underline">
                kampala@pyladies.com
              </a>
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
