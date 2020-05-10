
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Simpatico extends Simulation {

	val httpProtocol = http
		.baseUrl("https://21f49666.ngrok.io")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:74.0) Gecko/20100101 Firefox/74.0")

	val headers_0 = Map(
		"Accept" -> "text/event-stream",
		"Pragma" -> "no-cache")

	val headers_1 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_3 = Map("Accept" -> "text/css,*/*;q=0.1")

	val headers_6 = Map("Content-Type" -> "application/json; charset=UTF-8")



	val scn = scenario("Simpatico")
		.exec(http("request_0")
			.get("/thread/_next/webpack-hmr?page=/")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/thread/?thread=1")
			.headers(headers_1),
            http("request_3")
			.get("/thread/_next/static/css/styles.3983747d.chunk.css")
			.headers(headers_3),
            http("request_4")
			.get("/thread/_next/static/chunks/styles.6c2102487059ed343b2f.js"),
            http("request_5")
			.get("/thread/_next/static/AUmSmUQM__xfgyQ19ocls/pages/index.js"),
            http("request_6")
			.get("/api/v1/fetchThread?thread=1")
			.headers(headers_6),
            http("request_7")
			.get("/api/v1/fetchPostsForThread?thread=1&page=1")
			.headers(headers_6))
			.check(status.is(404)))

	setUp(scn.inject(atOnceUsers(10))).protocols(httpProtocol)
}