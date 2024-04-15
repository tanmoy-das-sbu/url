'use client';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent} from '@/components/ui/card';
import { toast } from 'sonner';
import { useRef } from 'react';

const App = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const shortenedUrlRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/shorten',
        { longUrl }
      );
      setShortUrl(response.data.shortUrl);
      setError('');
    } catch (err) {
      setError('Failed to shorten URL');
    }
  };

  const handleCopy = () => {
    if (shortenedUrlRef.current) {
      shortenedUrlRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <>
      <div className="bg-gray-50 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-6xl/none">
                Shorten URLs. Share with ease.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter your long URL below to generate a shortened link. Perfect
                for sharing on social media or in messages.
              </p>
              <form
                className="flex flex-col gap-2 max-w-sm"
                onSubmit={handleSubmit}
              >
                <Input
                  type="text"
                  placeholder="Enter long URL"
                  value={longUrl}
                  onChange={(e) => {
                    setLongUrl(e.target.value)
                  console.log(e.target.value)}}
                />
                <Button type="submit">Shorten</Button>
              </form>
            </div>
            <CardContent className="p-6 rounded-xl shadow-md lg:order-first">
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    toast('Upcoming Release', {
                      description:
                        'The implementation of Advanced Settings is currently in progress and is scheduled to be released within the next few days.',
                    })
                  }
                >
                  Advanced settings
                </Button>
                <div className="font-mono text-sm text-gray-500 dark:text-gray-400">
                  Your shortened URL will appear here.
                </div>
                <div>
                  <Input
                    className={`${error && 'border-red-500'} text-sm mb-2`}
                    id="shortened-url"
                    readOnly
                    value={shortUrl ? shortUrl : error}
                    ref={shortenedUrlRef}
                  />
                  <Button
                    variant="outline"
                    onClick={shortUrl ? handleCopy : null}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
