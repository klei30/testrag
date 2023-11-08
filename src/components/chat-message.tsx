"use client"

// ================== LIBS ==================
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypeRaw from "rehype-raw"
// ================== COMPONENTS ==================
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SourceLine from "@/components/source-item"
import { ChatGPTMessage } from "@/types"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// ================== CONFIGS ==================
import {
  AI_TITLE_COLOR,
  USER_TITLE_COLOR,
  AI_TITLE_NAME,
  USER_TITLE_NAME,
} from "@/configs/ui-configs"

export function ChatLine({ role = "assistant", content, sources }: ChatGPTMessage) {
  if (!content) return null

  return (
    <div>
      <Card className="mb-2">
        {/* ================== HEADER ================== */}
        <CardHeader>
          <CardTitle className={role != "assistant" ? AI_TITLE_COLOR : USER_TITLE_COLOR}>
            {role == "assistant" ? AI_TITLE_NAME : USER_TITLE_NAME}
          </CardTitle>
        </CardHeader>

        {/* ================== CONTENT ================== */}
        <CardContent className="text-sm sm:text-[0.9rem]">
          <div className="relative">
            <div className="chat-bubble-text flex min-h-[20px] list-inside flex-col items-start gap-3 overflow-x-auto break-words">
              <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw] as any}
              />
            </div>
          </div>
        </CardContent>

        {/* ================== SOURCES ================== */}
        <CardFooter className="mt-1">
          <CardDescription className="w-full">
            {sources ? (
              <Accordion type="single" collapsible className="mt-4 w-full divide-y-2 border-t-2">
                {sources.map((source, index) => (
                  <AccordionItem value={`source-${index}`} key={`source-id-${index}`}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <SourceLine source={source} index={index} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}


// The chat-message.tsx file is a React component file used in a Next.js application to render chat messages. 
// It utilizes the "use client" directive, which means it's designed to run only on the client side. This file imports several 
// libraries and components, such as ReactMarkdown for rendering Markdown content, remarkGfm, remarkBreaks, and rehypeRaw for 
// Markdown parsing with GitHub Flavored Markdown support and handling of raw HTML within the Markdown. It also imports various
//  Card-related components and a SourceLine component, which suggests that it is used to format and display chat messages within a
//   card UI, possibly with a header, content, and footer layout. The use of a ChatGPTMessage type indicates that this component is
//    tailored to handle message objects specifically structured for a chat interface, perhaps one that involves ChatGPT-like 
//    interactions.

