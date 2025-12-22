import { viteUrl, vercelUrl, localhostUrl } from "@/app/database/infraestructure/config/env.ts";

const getSiteURL = () => 
{
  const {siteUrlAvailable} = getFirstURLAvailable();
  const {siteWithProtocol} = addProtocolToSite(siteUrlAvailable);
  const {finalSiteUrl} = addSlashToEnd(siteWithProtocol);

  return finalSiteUrl;
}

const getFirstURLAvailable = () =>
{
    const siteUrlAvailable = viteUrl ?? vercelUrl ?? localhostUrl;

    return {siteUrlAvailable};
}

const addProtocolToSite = (site: string) => 
{
   const siteWithHTTP = site.startsWith('http');
   const addHTTPsToSite = `https://${site}`;

   const siteWithProtocol = siteWithHTTP ? site : addHTTPsToSite;

   return {siteWithProtocol};
}

const addSlashToEnd = (site: string) => 
{
    const siteWithSlash = site.endsWith('/');
    const addSlashToURL = `${site}/`;

    const finalSiteUrl = siteWithSlash ? site : addSlashToURL;
    
    return {finalSiteUrl};
}
    

export {
  getSiteURL
}