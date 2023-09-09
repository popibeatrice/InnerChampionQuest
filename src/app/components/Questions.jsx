import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Questions() {
  return (
    <section className="flex flex-col items-center justify-start gap-10 py-20 lg:gap-20 lg:py-32">
      <h2 className="font-heydex text-2xl xxs:text-3xl xs:text-4xl lg:text-6xl 2xl:text-6xl">
        Frequently Asked Questions
      </h2>
      <Accordion
        className="w-[80%] max-w-6xl font-popuca text-lg font-bold xs:text-xl lg:w-[70%] 2xl:text-2xl"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            How do I receive the course?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            The course is delivered via email. You will receive it immediately
            after purchase.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            I don’t have a clear purpose, is this course right for me?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            For sure it is. We kept a broad spectrum, so this course can be
            right for both the ones that just started their self improvement
            journey and the one that are more advanced. Knowledge is classified
            into fields of interest and some are generic. If you want to improve
            anything at all in your life then this course fits you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            Can I fail this course?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            No,the fear of not succeeding can be paralyzing. This fear can
            prevent individuals from even attempting to make positive changes in
            their lives. These being said, we took preventive measures so we can
            attest you will finish it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            Are there any further costs?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            No, all the materials you would ever need are included within the
            course content. Most of the advice doesn’t require any substantial
            capital in order to be used.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            I don’t have a lot of free time, can I still apply?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            Totally, the methods we teach can be incorporated in day to day life
            without any additional time wasted. We designed this course so you
            would only need 30 minutes per day in order to acquire and apply
            knowledge.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold xxs:text-lg sm:text-xl">
            Does my age matter?
          </AccordionTrigger>
          <AccordionContent className="font-bold xxs:text-lg sm:text-xl">
            Clearly not, this course is tailored to enhance life. You will find
            a different use to it, depending on your interests. At the end of
            the day, this course is a much better option than buying a new video
            game.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Questions;
