<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;
use App\Events\MyEvent;

class CheckHighOffLifeApi implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $stubs = [
            "ACCOUNTANTS",
            "AFRICA",
            "AI",
            "AIRFORCE",
            "APARTMENTS",
            "APP",
            "ARMY",
            "ART",
            "ASIA",
            "ATTORNEY",
            "BABY",
            "BAR",
            "BARGAINS",
            "BEER",
            "BEST",
            "BIKE",
            "BINGO",
            "BIZ",
            "BUSINESS",
            "BUZZ",
            "CAFE",
            "CAM",
            "CASH",
            "CASINO",
            "CHAT",
            "CHURCH",
            "CLEANING",
            "CLICK",
            "CLOTHING",
            "CLOUD",
            "CLUB",
            "CO",
            "CODES",
            "COFFEE",
            "COLLEGE",
            "COM",
            "COMMUNITY",
            "COMPUTER",
            "CONDOS",
            "CONSTRUCTION",
            "CONSULTING",
            "COOKING",
            "COOL",
            "COUNTRY",
            "COUPONS",
            "CREDIT",
            "CRICKET",
            "DATING",
            "DEALS",
            "DESIGN",
            "DIAMONDS",
            "DIGITAL",
            "DOCTOR",
            "DOG",
            "DOMAINS",
            "DOWNLOAD",
            "EARTH",
            "EDUCATION",
            "EMAIL",
            "ENERGY",
            "EXPERT",
            "FAITH",
            "FAMILY",
            "FANS",
            "FASHION",
            "FINANCE",
            "FISH",
            "FISHING",
            "FITNESS",
            "FOOTBALL",
            "FOUNDATION",
            "FUN",
            "FUTBOL",
            "GAMES",
            "GG",
            "GIFTS",
            "GLASS",
            "GLOBAL",
            "GOLD",
            "GOLF",
            "GURU",
            "HEALTHCARE",
            "HOCKEY",
            "HORSE",
            "HOUSE",
            "INFO",
            "INK",
            "INVESTMENTS",
            "IO",
            "LAWYER",
            "LEGAL",
            "LGBT",
            "LIFE",
            "LIVE",
            "LOL",
            "LOVE",
            "LTD",
            "MANAGEMENT",
            "MARKETING",
            "ME",
            "MEN",
            "MIAMI",
            "MOM",
            "MONEY",
            "MONSTER",
            "NET",
            "NINJA",
            "NYC",
            "ORG",
            "PARIS",
            "PARTY",
            "PICS",
            "PINK",
            "PIZZA",
            "PORN",
            "REHAB",
            "RENT",
            "SCHOOL",
            "SCIENCE",
            "SHOPPING",
            "SITE",
            "SOCIAL",
            "SOFTWARE",
            "SOLAR",
            "SPACE",
            "STREAM",
            "STUDIO",
            "SURGERY",
            "TODAY",
            "TOP",
            "TOYS",
            "TV",
            "UK",
            "UNIVERSITY",
            "US",
            "VEGAS",
            "VENTURES",
            "VIDEO",
            "VIP",
            "VODKA",
            "WIKI",
            "WINE",
            "WORK",
            "WORLD",
            "WTF",
            "XXX",
            "XYZ",
            "YOGA",
            "ZONE",
          ];
        foreach ($stubs as $stub) {
            $client = new Client(['base_uri' => 'https://jhgsq12kzl.execute-api.us-east-1.amazonaws.com/dev/']);
            // \Log::debug("requesting stub: ".$stub);
            $response = $client->request('GET', 'https://jhgsq12kzl.execute-api.us-east-1.amazonaws.com/dev/', [
                'query' => ['a' => strtolower($stub)]
            ]);
            $body = $response->getBody();
            $stringBody = (string) $body;
            $json = json_decode($stringBody);
            if(isset($json->u)) {
                // cache correct domain stub
                $stubUrl = 'https://www.highoff.' . strtolower($stub);
                Cache::put('track_url', $stubUrl);
                // schedule next job with delay of L seconds returned from API
                CheckHighOffLifeApi::dispatch()->delay(now()->addSeconds($json->l));
                event(new MyEvent($stubUrl));
                \Log::debug("Found the stub: " . $stubUrl);
                \Log::debug('Scheduled the next job (s): ' . $json->l);
            }
        }
    }
}
