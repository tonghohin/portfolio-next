import Script from "next/script";

export async function ClarityScript() {
    const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!clarityProjectId) return null;

    return (
        <Script id="clarity-init">
            {`(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
    );
}
