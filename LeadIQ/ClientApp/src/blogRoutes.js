﻿import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
// Blogs Start
import BlogList from './pages/BlogList';
import AnObituaryForTheDeskPhone from './blogs/AnObituaryForTheDeskPhone';
import BlogTemplate from './blogs/BlogTemplate';
import FiveGreatProspectingExamplesThatActuallyWorked from './blogs/FiveGreatProspectingExamplesThatActuallyWorked';
import FiveWaysToImproveFollowUps from './blogs/FiveWaysToImproveFollowUps';
import FiveWaysToLeverageLinkedinInmail from './blogs/FiveWaysToLeverageLinkedinInmail';
import HowCreativityChangedOneBdrsLife from './blogs/HowCreativityChangedOneBdrsLife';
import HowToExportAnyLinkedInContact from './blogs/HowToExportAnyLinkedInContact';
import HowToGetProspectsToAcceptYourLinkedInConnectionRequests from './blogs/HowToGetProspectsToAcceptYourLinkedInConnectionRequests';
import HowToPitchYourCompetitorsCustomersWithoutBeingAnAsshole from './blogs/HowToPitchYourCompetitorsCustomersWithoutBeingAnAsshole';
import HowWillTheGdprImpactYourOutboundSalesProgram from './blogs/HowWillTheGdprImpactYourOutboundSalesProgram';
import SalesExpertsGiveTipsOnColdCallingCellPhones from './blogs/SalesExpertsGiveTipsOnColdCallingCellPhones';
import TheThreeStagesOfConversation from './blogs/TheThreeStagesOfConversation';
import WhatHappensWhenYouAddOneEightSevenLinkedinConnectionsAtOnce from './blogs/WhatHappensWhenYouAddOneEightSevenLinkedinConnectionsAtOnce';
import WhyTheseGoodColdEmailExamplesWorked from './blogs/WhyTheseGoodColdEmailExamplesWorked';
import WhyYouShouldStopIntroducingYourselfInColdEmails from './blogs/WhyYouShouldStopIntroducingYourselfInColdEmails';
import YourEmailsAreBadHeresFourReasonsWhy from './blogs/YourEmailsAreBadHeresFourReasonsWhy';
import HowToMakeSalesVideoThatDontSuck from './blogs/HowToMakeSalesVideoThatDontSuck';
import HowDoesLeadiqGetOurData from './blogs/HowDoesLeadiqGetOurData';
import OvercomeProspectingParalysisUsingTriggerEvents from './blogs/OvercomeProspectingParalysisUsingTriggerEvents';
import TheFutureOfProspecting from './blogs/TheFutureOfProspecting';
import ProspectingPodcastTalkingAboutColdCallingWithLaurenBailey from './blogs/ProspectingPodcastTalkingAboutColdCallingWithLaurenBailey';
import HowPersonalBrandingGotMeOutOfMyMothersBasement from './blogs/HowPersonalBrandingGotMeOutOfMyMothersBasement';
import TheFlawsWithAMeFirstMentalityInSales from './blogs/TheFlawsWithAMeFirstMentalityInSales';
import HowOneColdEmailMistakeCostThisRepAReply from './blogs/HowOneColdEmailMistakeCostThisRepAReply';
import HowToSetGmailAsYourDefaultInbox from './blogs/HowToSetGmailAsYourDefaultInbox';
import JammingAroundArospectingIdeasWithAlexPerkins from './blogs/JammingAroundArospectingIdeasWithAlexPerkins';
import FiveTipsToConquerYourLeadiqTrial from './blogs/FiveTipsToConquerYourLeadiqTrial';
import HowToIdentifyYourTeamsMostEffectiveProspectors from './blogs/HowToIdentifyYourTeamsMostEffectiveProspectors';
import HowToFindYourProspectsBeforeAnEvent from './blogs/HowToFindYourProspectsBeforeAnEvent';
import WhatCorneaTransplantsTaughtMeAboutSales from './blogs/WhatCorneaTransplantsTaughtMeAboutSales';
import ProspectingPodcastHighFivesWithChristopherSweat from './blogs/ProspectingPodcastHighFivesWithChristopherSweat';
import VideoWhatIsCampaignBasedProspecting from './blogs/VideoWhatIsCampaignBasedProspecting';
import DontBeBoring from './blogs/DontBeBoring';
import WhyYouShouldStopUsingBusinessCardsAtEvents from './blogs/WhyYouShouldStopUsingBusinessCardsAtEvents';
import ProspectingJamSessionWithMichaelPullmanFromZuusDynamicScheduling from './blogs/ProspectingJamSessionWithMichaelPullmanFromZuusDynamicScheduling';
import ProspectingPodcastHighFivesWithDanFrost from './blogs/ProspectingPodcastHighFivesWithDanFrost';
import WhatILearnedInterningAtLeadiqThisSummer from './blogs/WhatILearnedInterningAtLeadiqThisSummer';
import WhyTheseThreeColdEmailsArentWorking from './blogs/WhyTheseThreeColdEmailsArentWorking';
import MakingOutboundSalesWork from './blogs/MakingOutboundSalesWork';
import PodcastPhilGerbyshakTalksAboutGivingToYourProspects from './blogs/PodcastPhilGerbyshakTalksAboutGivingToYourProspects';
import HowToKeepAProspectWarmWithoutABlanket from './blogs/HowToKeepAProspectWarmWithoutABlanket';
import AnIntroductionToBrandArchetypingForSocialSelling from './blogs/AnIntroductionToBrandArchetypingForSocialSelling';
import ProspectingPodcastSellingIntoHrWithSonyaMeloff from './blogs/ProspectingPodcastSellingIntoHrWithSonyaMeloff';
import HowToSetOutlookAsYourDefaultInbox from './blogs/HowToSetOutlookAsYourDefaultInbox';
import WhatAreYourSalesTeamsTalents from './blogs/WhatAreYourSalesTeamsTalents';
import HowToProperlyAskForReferralsInSales from './blogs/HowToProperlyAskForReferralsInSales';
import TheFourSkillsOfAMasterCommunicator from './blogs/TheFourSkillsOfAMasterCommunicator';
import WhyYouNeedToBeAnAssetForYourProspects from './blogs/WhyYouNeedToBeAnAssetForYourProspects';
import HowToUseYourProspectingListsOnSocialMedia from './blogs/HowToUseYourProspectingListsOnSocialMedia';
import HowToMakeASuperTargetedAccountListForFreeForAccountBasedSelling from './blogs/HowToMakeASuperTargetedAccountListForFreeForAccountBasedSelling';
import PodcastHowToSellBoldlyByAskingTheEasyQuestions from './blogs/PodcastHowToSellBoldlyByAskingTheEasyQuestions';
import ColdCallingTheDosAndTheDonts from './blogs/ColdCallingTheDosAndTheDonts';
import ProspectingPodcastHighFivesWithAmyVolas from './blogs/ProspectingPodcastHighFivesWithAmyVolas';
import WhatIsACsvAndHowToUseThemInLeadiq from './blogs/WhatIsACsvAndHowToUseThemInLeadiq';
import UsingLeadiqVsYourDatabaseSolutions from './blogs/UsingLeadiqVsYourDatabaseSolutions';
import VoteForJeremyLeveilleAsSdrOfTheYear from './blogs/VoteForJeremyLeveilleAsSdrOfTheYear';
import TalkingWithJoshBraun from './blogs/TalkingWithJoshBraun';
import TheProspectingPodcastWithMaxAltschuler from './blogs/TheProspectingPodcastWithMaxAltschuler';
import ProspectingPodcastHighFivesWithDaleZwizinski from './blogs/ProspectingPodcastHighFivesWithDaleZwizinski';
import ProspectingPodcastWithTitoBohrt from './blogs/ProspectingPodcastWithTitoBohrt';
import PickingTheRightAccountsWhenProspecting from './blogs/PickingTheRightAccountsWhenProspecting';
import VideoTutorialHowToMergeTwoAccountsInSalesforce from './blogs/VideoTutorialHowToMergeTwoAccountsInSalesforce';
import PodcastSocialSellingWithTaylorScotto from './blogs/PodcastSocialSellingWithTaylorScotto';
import TheHighsAndLowsOfProspecting from './blogs/TheHighsAndLowsOfProspecting';
import MiniProspectingPodcastWithJeremyLeveille from './blogs/MiniProspectingPodcastWithJeremyLeveille';
import RyanTalksLinkedinSalesNavigatorForDummiesWithPerryVanBeek from './blogs/RyanTalksLinkedinSalesNavigatorForDummiesWithPerryVanBeek';
import TalkingAboutCampaignBasedProspectingAtFlipmyfunnel from './blogs/TalkingAboutCampaignBasedProspectingAtFlipmyfunnel';
import MattHeinzSpeaks from './blogs/MattHeinzSpeaks';
import ProofThatTheRulerBrandArchetypeWorks from './blogs/ProofThatTheRulerBrandArchetypeWorks';
import ColdCallingVsColdEmailingStartColdEmails from './blogs/ColdCallingVsColdEmailingStartColdEmails';
import WhyYouShouldBuyLinkedinSalesNavigator from './blogs/WhyYouShouldBuyLinkedinSalesNavigator';
import KitedeskIsShuttingDown from './blogs/KitedeskIsShuttingDown';
import WhatSubjectsShouldYouUseForSendingColdEmails from './blogs/WhatSubjectsShouldYouUseForSendingColdEmails';
import HowWeTurnedFourZeroPercentOfOurColdEmailIntoMeetings from './blogs/HowWeTurnedFourZeroPercentOfOurColdEmailIntoMeetings';
import LookingAtSomeColdEmails from './blogs/LookingAtSomeColdEmails';
import ThreeActionableTipsTurningColdProspectsHighQualityLeads from './blogs/ThreeActionableTipsTurningColdProspectsHighQualityLeads';
import AddLeadsIntoSalesloftCadencesWithLeadiq from './blogs/AddLeadsIntoSalesloftCadencesWithLeadiq';
import DreamforceTwoZeroOneSevenPartyList from './blogs/DreamforceTwoZeroOneSevenPartyList';
// Blogs End
import Layout from './components/Layout';


class BlogRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/blog' component={BlogList} />
                        <Route exact path='/blog/template' component={BlogTemplate} />
                        <Route exact path='/an-obituary-for-the-desk-phone' component={AnObituaryForTheDeskPhone} />
                        <Route exact path='/5-great-prospecting-examples-that-actually-worked' component={FiveGreatProspectingExamplesThatActuallyWorked} />
                        <Route exact path='/5-ways-to-improve-follow-ups' component={FiveWaysToImproveFollowUps} />
                        <Route exact path='/5-ways-to-leverage-linkedin-inmail' component={FiveWaysToLeverageLinkedinInmail} />
                        <Route exact path='/how_creativity_changed_one_bdrs_life' component={HowCreativityChangedOneBdrsLife} />
                        <Route exact path='/how-to-export-any-linkedin-contact' component={HowToExportAnyLinkedInContact} />
                        <Route exact path='/how-to-get-prospects-to-accept-your-linkedin-connection-requests' component={HowToGetProspectsToAcceptYourLinkedInConnectionRequests} />
                        <Route exact path='/how-to-pitch-your-competitors-customers-without-being-an-asshole' component={HowToPitchYourCompetitorsCustomersWithoutBeingAnAsshole} />
                        <Route exact path='/how-will-the-gdpr-impact-your-outbound-sales-program' component={HowWillTheGdprImpactYourOutboundSalesProgram} />
                        <Route exact path='/sales-experts-give-tips-on-cold-calling-cell-phones' component={SalesExpertsGiveTipsOnColdCallingCellPhones} />
                        <Route exact path='/the-3-stages-of-conversation' component={TheThreeStagesOfConversation} />
                        <Route exact path='/what-happens-when-you-add-187-linkedin-connections-at-once' component={WhatHappensWhenYouAddOneEightSevenLinkedinConnectionsAtOnce} />
                        <Route exact path='/why-these-good-cold-email-examples-worked' component={WhyTheseGoodColdEmailExamplesWorked} />
                        <Route exact path='/why-you-should-stop-introducing-yourself-in-cold-emails' component={WhyYouShouldStopIntroducingYourselfInColdEmails} />
                        <Route exact path='/your-emails-are-bad-heres-4-reasons-why' component={YourEmailsAreBadHeresFourReasonsWhy} />
                        <Route exact path='/how-to-make-sales-video-that-dont-suck' component={HowToMakeSalesVideoThatDontSuck} />
                        <Route exact path='/how-does-leadiq-get-our-data' component={HowDoesLeadiqGetOurData} />
                        <Route exact path='/overcome-prospecting-paralysis-using-trigger-events' component={OvercomeProspectingParalysisUsingTriggerEvents} />
                        <Route exact path='/the-future-of-prospecting' component={TheFutureOfProspecting} />
                        <Route exact path='/prospecting-podcast-talking-about-cold-calling-with-lauren-bailey' component={ProspectingPodcastTalkingAboutColdCallingWithLaurenBailey} />
                        <Route exact path='/how-personal-branding-got-me-out-of-my-mothers-basement' component={HowPersonalBrandingGotMeOutOfMyMothersBasement} />
                        <Route exact path='/the-flaws-with-a-me-first-mentality-in-sales' component={TheFlawsWithAMeFirstMentalityInSales} />
                        <Route exact path='/how_one_cold_email_mistake_cost_this_rep_a_reply' component={HowOneColdEmailMistakeCostThisRepAReply} />
                        <Route exact path='/how-to-set-gmail-as-your-default-inbox' component={HowToSetGmailAsYourDefaultInbox} />
                        <Route exact path='/jamming-around-prospecting-ideas-with-alex-perkins' component={JammingAroundArospectingIdeasWithAlexPerkins} />
                        <Route exact path='/5-tips-to-conquer-your-leadiq-trial' component={FiveTipsToConquerYourLeadiqTrial} />
                        <Route exact path='/how-to-identify-your-teams-most-effective-prospectors' component={HowToIdentifyYourTeamsMostEffectiveProspectors} />
                        <Route exact path='/how-to-find-your-prospects-before-an-event' component={HowToFindYourProspectsBeforeAnEvent} />
                        <Route exact path='/what-cornea-transplants-taught-me-about-sales' component={WhatCorneaTransplantsTaughtMeAboutSales} />
                        <Route exact path='/prospecting-podcast-high-fives-with-christopher-sweat' component={ProspectingPodcastHighFivesWithChristopherSweat} />
                        <Route exact path='/video-what-is-campaign-based-prospecting' component={VideoWhatIsCampaignBasedProspecting} />
                        <Route exact path='/dont-be-boring' component={DontBeBoring} />
                        <Route exact path='/why-you-should-stop-using-business-cards-at-events' component={WhyYouShouldStopUsingBusinessCardsAtEvents} />
                        <Route exact path='/prospecting-jam-session-with-michael-pullman-from-zuus-dynamic-scheduling' component={ProspectingJamSessionWithMichaelPullmanFromZuusDynamicScheduling} />
                        <Route exact path='/prospecting-podcast-high-fives-with-dan-frost' component={ProspectingPodcastHighFivesWithDanFrost} />
                        <Route exact path='/what-i-learned-interning-at-leadiq-this-summer' component={WhatILearnedInterningAtLeadiqThisSummer} />
                        <Route exact path='/why-these-3-cold-emails-arent-working' component={WhyTheseThreeColdEmailsArentWorking} />
                        <Route exact path='/making-outbound-sales-work' component={MakingOutboundSalesWork} />
                        <Route exact path='/podcast-phil-gerbyshak-talks-about-giving-to-your-prospects' component={PodcastPhilGerbyshakTalksAboutGivingToYourProspects} />
                        <Route exact path='/how-to-keep-a-prospect-warm-without-a-blanket' component={HowToKeepAProspectWarmWithoutABlanket} />
                        <Route exact path='/an-introduction-to-brand-archetyping-for-social-selling' component={AnIntroductionToBrandArchetypingForSocialSelling} />
                        <Route exact path='/prospecting-podcast-selling-into-hr-with-sonya-meloff' component={ProspectingPodcastSellingIntoHrWithSonyaMeloff} />
                        <Route exact path='/how-to-set-outlook-as-your-default-inbox' component={HowToSetOutlookAsYourDefaultInbox} />
                        <Route exact path='/what-are-your-sales-teams-talents' component={WhatAreYourSalesTeamsTalents} />
                        <Route exact path='/how-to-properly-ask-for-referrals-in-sales' component={HowToProperlyAskForReferralsInSales} />
                        <Route exact path='/the-four-skills-of-a-master-communicator' component={TheFourSkillsOfAMasterCommunicator} />
                        <Route exact path='/why-you-need-to-be-an-asset-for-your-prospects' component={WhyYouNeedToBeAnAssetForYourProspects} />
                        <Route exact path='/how-to-use-your-prospecting-lists-on-social-media' component={HowToUseYourProspectingListsOnSocialMedia} />
                        <Route exact path='/how-to-make-a-super-targeted-account-list-for-free-for-account-based-selling' component={HowToMakeASuperTargetedAccountListForFreeForAccountBasedSelling} />
                        <Route exact path='/podcast-how-to-sell-boldly-by-asking-the-easy-questions' component={PodcastHowToSellBoldlyByAskingTheEasyQuestions} />
                        <Route exact path='/cold-calling-the-dos-and-the-donts' component={ColdCallingTheDosAndTheDonts} />
                        <Route exact path='/prospecting-podcast-high-fives-with-amy-volas' component={ProspectingPodcastHighFivesWithAmyVolas} />
                        <Route exact path='/what-is-a-csv-and-how-to-use-them-in-leadiq' component={WhatIsACsvAndHowToUseThemInLeadiq} />
                        <Route exact path='/using-leadiq-vs-your-database-solutions' component={UsingLeadiqVsYourDatabaseSolutions} />
                        <Route exact path='/vote-for-jeremy-leveille-as-sdr-of-the-year' component={VoteForJeremyLeveilleAsSdrOfTheYear} />
                        <Route exact path='/talking-with-josh-braun' component={TalkingWithJoshBraun} />
                        <Route exact path='/the-prospecting-podcast-with-max-altschuler' component={TheProspectingPodcastWithMaxAltschuler} />
                        <Route exact path='/prospecting-podcast-high-fives-with-dale-zwizinski' component={ProspectingPodcastHighFivesWithDaleZwizinski} />
                        <Route exact path='/prospecting-podcast-with-tito-bohrt' component={ProspectingPodcastWithTitoBohrt} />
                        <Route exact path='/picking-the-right-accounts-when-prospecting' component={PickingTheRightAccountsWhenProspecting} />
                        <Route exact path='/video-tutorial-how-to-merge-two-accounts-in-salesforce' component={VideoTutorialHowToMergeTwoAccountsInSalesforce} />
                        <Route exact path='/podcast-social-selling-with-taylor-scotto' component={PodcastSocialSellingWithTaylorScotto} />
                        <Route exact path='/the-highs-and-lows-of-prospecting' component={TheHighsAndLowsOfProspecting} />
                        <Route exact path='/mini-prospecting-podcast-with-jeremy-leveille' component={MiniProspectingPodcastWithJeremyLeveille} />
                        <Route exact path='/ryan-talks-linkedin-sales-navigator-for-dummies-with-perry-van-beek' component={RyanTalksLinkedinSalesNavigatorForDummiesWithPerryVanBeek} />
                        <Route exact path='/talking-about-campaign-based-prospecting-at-flipmyfunnel' component={TalkingAboutCampaignBasedProspectingAtFlipmyfunnel} />
                        <Route exact path='/matt-heinz-speaks' component={MattHeinzSpeaks} />
                        <Route exact path='/proof-that-the-ruler-brand-archetype-works' component={ProofThatTheRulerBrandArchetypeWorks} />
                        <Route exact path='/cold-calling-vs-cold-emailing-start-cold-emails' component={ColdCallingVsColdEmailingStartColdEmails} />
                        <Route exact path='/why-you-should-buy-linkedin-sales-navigator' component={WhyYouShouldBuyLinkedinSalesNavigator} />
                        <Route exact path='/kitedesk-is-shutting-down' component={KitedeskIsShuttingDown} />
                        <Route exact path='/what-subjects-should-you-use-for-sending-cold-emails' component={WhatSubjectsShouldYouUseForSendingColdEmails} />2
                        <Route exact path='/how-we-turned-40percent-of-our-cold-email-into-meetings' component={HowWeTurnedFourZeroPercentOfOurColdEmailIntoMeetings} />
                        <Route exact path='/looking-at-some-cold-emails' component={LookingAtSomeColdEmails} />
                        <Route exact path='/3-actionable-tips-turning-cold-prospects-high-quality-leads' component={ThreeActionableTipsTurningColdProspectsHighQualityLeads} />
                        <Route exact path='/add-leads-into-salesloft-cadences-with-leadiq' component={AddLeadsIntoSalesloftCadencesWithLeadiq} />
                        <Route exact path='/dreamforce_2017_party_list' component={DreamforceTwoZeroOneSevenPartyList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default BlogRoutes;