/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lTqhXt1I8Zu
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, CardHeader, Card } from "@/components/ui/card"

export function Home() {
  return (<>
    <div className="bg-gray-50 py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-6xl/none">
              Shorten URLs. Share with ease.
            </h1>
            <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your long URL below to generate a shortened link. Perfect for sharing on social media or in
              messages.
            </p>
            <form className="flex flex-col gap-2 max-w-sm">
              <Input className="w-full" placeholder="Enter your URL" type="url" />
              <Button type="submit">Shorten</Button>
            </form>
          </div>
          <CardContent className="p-6 rounded-xl shadow-md lg:order-first">
            <div className="flex flex-col gap-2">
              <Link
                className="inline-flex underline hover:no-underline transition-colors text-sm hover:underline"
                href="#">
                Advanced settings
              </Link>
              <div className="font-mono text-sm text-gray-500 dark:text-gray-400">
                Your shortened URL will appear here.
              </div>
              <Input
                className="text-sm"
                id="shortened-url"
                readOnly
                value="https://example.com/shortlink" />
              <Button variant="outline">Copy</Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
    <div className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The link you want to share, simplified.
            </h2>
            <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your long URL below to generate a shortened link. Perfect for sharing on social media or in
              messages.
            </p>
          </div>
          <CardContent
            className="p-6 rounded-xl border border-gray-200 border-dashed dark:border-gray-800">
            <form className="flex flex-col gap-2 max-w-sm">
              <Input className="w-full" placeholder="Enter your URL" type="url" />
              <Button type="submit">Shorten</Button>
            </form>
          </CardContent>
        </div>
      </div>
    </div>
    <div className="py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <Card>
          <CardHeader className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Enter your URL</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We&apos;ll generate a shortened link for you to copy and share.
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-t border-gray-200 dark:border-gray-800">
              <form className="flex flex-col gap-2 p-4">
                <Input
                  className="border-gray-200 border-gray-200 dark:border-gray-800"
                  placeholder="Enter your URL"
                  type="url" />
                <Button type="submit">Shorten</Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </>);
}
