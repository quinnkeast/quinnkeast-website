import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

function ReadMe() {
  return (
    <Layout>
      <Head>
        <title>Quinn.ReadMe | Quinn Keast</title>
      </Head>
      <PageHeader>
        <h1 className="text-2xl md:text-4xl">Quinn.ReadMe</h1>
        <p className="text-base md:text-2xl mt-0 subpixel-antialiased">
          This is a user guide on me and how I work. It captures my guiding
          values, how I work as a human, and will hopefully help you understand
          me better and help us work together.
        </p>
      </PageHeader>
      <div className="grid md:grid-cols-3 border-t border-black border-opacity-10 mt-8 md:mt-12 pt-8 md:pt-12">
        <div className="col-span-1">
          <menu className="sticky top-12 list-none m-0 p-0">
            <li>
              <span className="text-sm font-medium">Sections</span>
            </li>
            <li>
              <a href="#north-star-ideals">North Star Ideals</a>
            </li>
            <li>
              <a href="#ethical-principles">Ethical Principles</a>
            </li>
            <li>
              <a href="#nuance">Nuance</a>
            </li>
            <li>
              <a href="#errata">Errata</a>
            </li>
          </menu>
        </div>
        <div className="md:col-span-2 max-w-md">
          <h2 className="mt-4 md:mt-0" id="north-star-ideals">
            North Star Ideals
          </h2>
          <p>
            <strong>People matter.</strong> I believe that people are at the
            heart of everything we do. Great products, services, and experiences
            are built for, and by, humans, all of whom have their own context,
            values, and perspectives. Use empathy to understand and connect with
            people.
          </p>
          <p>
            <strong>Do good.</strong> Good comes in many forms. Good could mean
            positive social impact; it could mean quality; or it could mean
            personally fulfilling. Be intentional. Do good. In whatever form
            good takes.
          </p>
          <p>
            <strong>Grow.</strong> It’s important to me to grow in some way, no
            matter how large or small, every day. Growth calls for
            self-reflection, critical thinking, and a willingness to make (and
            learn from) mistakes.
          </p>
          <hr />
          <h2 id="ethical-principles">Ethical Principles</h2>
          <p>
            <strong>Honesty.</strong> We ought be honest and transparent with
            our users and each other in our processes and products.
          </p>
          <p>
            <strong>Understanding.</strong> We ought take responsibility for
            building clarity for our users through education and clear
            information.
          </p>
          <p>
            <strong>Affirmative action.</strong> We ought seek deliberate,
            affirmative action from our users whenever we must seek consent and
            approval.
          </p>
          <p>
            <strong>Inclusion.</strong> We ought strive to make our processes,
            teams, and products inclusive to people of all backgrounds and
            abilities.
          </p>
          <p>
            <strong>Positivity.</strong> We ought seek to make a positive
            impact: not just for our users as individuals, but for society at
            large.
          </p>
          <p>
            <strong>Sustainability.</strong> We ought commit to building
            sustainable processes, products, and relationships with our users,
            team members, and environments.
          </p>
          <hr />
          <h2 id="nuance">Nuance</h2>
          <p>
            <strong>I like to use people as a sounding board.</strong>{" "}
            Sometimes, I’m not actually looking for an answer or solution.
            Talking to another person forces me to organize and articulate my
            thoughts. I prefer humans to rubber ducks, because a human can tell
            me when I’m not making sense (and need to re-organize my thoughts).
          </p>
          <p>
            <strong>If I’m not making sense, I want to know.</strong> You should
            ask me for clarification. It might be that I assumed a different
            level of shared context, or I might need to re-organize my thoughts.
          </p>
          <p>
            <strong>I like doing work that puts me in a flow state.</strong> The
            three things that we need to get into flow states are clear goals
            and processes, a mechanism for feedback, and a good balance between
            the perceived challenge and my perception of my own ability. I will
            do my best to create this environment for myself and for others.
          </p>
          <p>
            <strong>
              I think in systems and in the context of a bigger picture.
            </strong>{" "}
            I love thinking about how people and data flow and relate and how
            things fit together. I will always try and understand the bigger
            picture.
          </p>
          <p>
            <strong>I bias towards action.</strong> I love discussing ideas and
            possibilities, but I believe the best way to get things done is to
            get started. Trying things and making mistakes along the way is the
            best way to learn and get better.
          </p>
          <p>
            <strong>I assume positive intent.</strong> I assume people have
            positive intentions in everything they do.
          </p>
          <hr />
          <h2 id="errata">Errata</h2>
          <p>
            <strong>I have a hearing problem.</strong> More specifically, I’m
            deaf as a post. I believe in being transparent and candid with you
            about my hearing. I find that it’s easiest to work together when you
            know exactly what to expect.
          </p>
          <h3>How My Hearing Works</h3>
          <p>
            <strong>I have sensorineural hearing loss.</strong> This means that
            the small hair cells in my cochlea are broken down, and don’t
            respond to sound waves as strongly as they should.
          </p>
          <p>
            <strong>I wear hearing aids.</strong> They help, but they don’t cure
            hearing loss. More on this in a moment.
          </p>
          <p>
            <strong>
              My hearing wasn’t that bad at first, and got worse over time.
            </strong>{" "}
            When I was much younger, I could hear somewhat well enough without
            my hearing aids. Over time, my hearing degraded to the point where I
            can’t hear sounds without my hearing aids.
          </p>
          <p>
            <strong>My issue isn’t volume, it’s clarity.</strong> With my
            hearing aids in, I can hear your voice (including your pitch, tone,
            and inflection), music, and sound in general. However, while I can
            hear your voice, I can’t draw words out of it. Hearing speech
            doesn’t involve just hearing the sounds, it involves clarity of
            sound.
          </p>
          <p>
            <strong>I speak normally, and I read lips.</strong> Because my
            hearing loss got worse over time, I grew up with normal speech and
            learned to read lips. Most of the time, you won’t notice that I have
            a hearing problem.
          </p>
          <p>
            <strong>I don’t know sign language.</strong> I never had any need
            for it. I’m also not part of the Deaf community.
          </p>
          <h3>How to Make Things Easy for Both of Us</h3>
          <p>
            <strong>I can’t hear you on phone or video calls.</strong> There’s
            something about a 2D screen and inconsistent video quality that
            makes it really, really hard to lip read over video. When I do video
            calls, I use speech-to-text tools like Google Meet’s captions or{" "}
            <a href="https://otter.ai">Otter.ai</a>. (Like all technology,
            sometimes these tools just randomly stop working during a call. When
            that happens, I can’t understand you until the tools kick back in.
            I’ll let you know if that happens – often the easiest fix is to just
            switch to instant messaging.)
          </p>
          <p>
            <strong>I need you to face me.</strong> If you’re looking away from
            me, I can’t lip read you. I’ll do my best to put myself in a
            position where I can see you, like across from you in a meeting.
          </p>
          <p>
            <strong>Talk normally.</strong> I learned to lip read by lip reading
            people talking normally. If you raise your voice, talk more slowly,
            exaggerate your words, or really anything that isn’t how you
            normally talk, it’s harder for me to understand you.
          </p>
          <p>
            <strong>
              Lip reading works best for me if you talk in sentences.
            </strong>{" "}
            I understand speech by understanding sentences or words in context.
            If you say “chrysanthemum” on its own, I can’t possibly understand
            it. But if you tell me you “spent the weekend planting
            chrysanthemums in your back garden,” it’ll be crystal clear.
          </p>
          <p>
            <strong>
              I don’t need to be looking at you 100% of the time to understand
              you.
            </strong>{" "}
            If I glance away while you’re talking, I won’t miss what you’re
            saying. If it happens that I do, I’ll tell you.
          </p>
          <p>
            <strong>If I didn’t understand you, tell me.</strong> Sometimes I’ll
            think I understood what you said, but you’ll know that I didn’t.
          </p>
          <p>
            <strong>
              If you have any questions about my hearing, please ask!
            </strong>{" "}
            It’s fun to talk about and makes it easier to work together.
          </p>
          <h3>How My Hearing Affects My Work as a UX Designer</h3>
          <p>
            <strong>It doesn’t affect my work as a UX designer.</strong> We live
            in an amazing world full of amazing people and amazing technology.
            Slack and emails replace phone calls. Video conferencing has text
            messaging and there are real-time speech-to-text options available
            to me. And if I just can’t lip read something you said, there’s
            probably a device around that would let you type it out.
          </p>
          <h3>How My Hearing Affects Work and Life in General</h3>
          <p>
            <strong>Lip reading in larger groups is exhausting.</strong> I’ll be
            very tuckered out at the end of the day.
          </p>
          <p>
            <strong>
              I will be quieter in larger meetings where I’m an attendee, not
              the facilitator.
            </strong>{" "}
            This doesn’t mean I’m not engaged: it just means I’m focusing on
            understanding what’s being said and avoiding the embarrassment of
            responding to something I didn’t hear properly.
          </p>
          <p>
            <strong>I don’t have patience for rudderless meetings.</strong> I
            prefer meetings with a clear desired outcome, even if that outcome
            is shooting the shit. I make sure all of my meetings have a
            structure and purpose that I share well in advance.
          </p>
          <p>
            <strong>Sometimes I miss things.</strong> If something is mentioned
            in passing, there’s a good chance I might not pick up on it. If that
            something was a must-know, it’s a good idea to write it down
            somewhere.
          </p>
          <p>
            <strong>I value getting to know people one-on-one.</strong> It’s
            much easier for me (and you) to build a close friendship or working
            relationship if we’re talking one-on-one. I think this applies for
            almost everyone of any level of hearing.
          </p>
          <hr />
          <p>
            This is a living document. It’s incomplete and will certainly
            continue to grow and change as I grow and change.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ReadMe;
