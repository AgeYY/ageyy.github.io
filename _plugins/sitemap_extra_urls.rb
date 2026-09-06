# Keep jekyll-sitemap's generated entries and include separately deployed sites.
require "cgi"

Jekyll::Hooks.register :pages, :post_render do |page|
  next unless page.url == "/sitemap.xml"

  entries = Array(page.site.config["sitemap_extra_urls"]).uniq.filter_map do |url|
    escaped_url = CGI.escapeHTML(url)
    next if page.output.include?("<loc>#{escaped_url}</loc>")

    "<url><loc>#{escaped_url}</loc></url>"
  end

  page.output = page.output.sub("</urlset>", "#{entries.join}</urlset>")
end
