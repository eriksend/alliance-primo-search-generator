/**
 * Creates a widget or a link for Primo Basic Searches.
 * Based on Primo Deep Search Creator by Jim Robinson
 * Based on Brief Search documentation on http://developer.exlibrisgroup.com
 * Customized with values for Orbis Cascade Alliance Libraries
 */

var alliance_libraries = {
	"Select an Alliance Library"	: "Select an Alliance Library",
	"Central Oregon Community College" : "Central Oregon Community College",
	"Central Washington University" : "Central Washington University",
	"Chemeketa Community College" : "Chemeketa Community College",
	"Clark College" : "Clark College",
	"Concordia University" : "Concordia University",
	"Eastern Oregon University" : "Eastern Oregon University",
	"Eastern Washington University" : "Eastern Washington University",
	"George Fox University" : "George Fox University",
	"Lane Community College" : "Lane Community College",
	"Lewis &amp; Clark College" : "Lewis & Clark College",
	"Linfield College" : "Linfield College",
	"Marylhurst University" : "Marylhurst University",
	"Mt. Hood Community College" : "Mt. Hood Community College",
	"Oregon Health &amp; Science University" : "Oregon Health & Science University",
	"Oregon Institute of Technology" : "Oregon Institute of Technology",
	"Oregon State University" : "Oregon State University",
	"Pacific University" : "Pacific University",
	"Portland Community College" : "Portland Community College",
	"Portland State University" : "Portland State University",
	"Reed College" : "Reed College",
	"Saint Martin's University" : "Saint Martin's University",
	"Seattle Pacfic University" : "Seattle Pacfic University",
	"Seattle University" : "Seattle University",
	"Southern Oregon University" : "Southern Oregon University",
	"The Evergreen State College" : "The Evergreen State College",
	"University of Idaho" : "University of Idaho",
	"University of Oregon" : "University of Oregon",
	"University of Portland" : "University of Portland",
	"University of Puget Sound" : "University of Puget Sound",
	"University of Washington" : "University of Washington",
	"Walla Walla University" : "Walla Walla University",
	"Warner Pacific College" : "Warner Pacific College",
	"Washington State University" : "Washington State University",
	"Western Oregon University" : "Western Oregon University",
	"Western Washington University" : "Western Washington University",
	"Whitman College" : "Whitman College",
	"Willamette University Hatfield Library" : "Willamette University Hatfield Library",
	"Willamette University J.W. Long Law Library" : "Willamette University J.W. Long Law Library"
}
// institution code : view code : URL : Name
var COCC_library_basic_details = ["COCC", "COCC", "http://alliance-primo.hosted.exlibrisgroup.com", "Central Oregon Community College"];
var CWU_library_basic_details = ["CWU", "CWU", "http://alliance-primo.hosted.exlibrisgroup.com", "Central Washington University"];
var CHEMEK_library_basic_details = ["CHEMEK", "CHEMEK" , "http://alliance-primo.hosted.exlibrisgroup.com", "Chemeketa Community College"];
var CC_library_basic_details = ["CC", "CC", "http://alliance-primo.hosted.exlibrisgroup.com", "Clark College"];
var CONC_library_basic_details = ["CONC", "CONC", "http://alliance-primo.hosted.exlibrisgroup.com", "Concordia University"];
var EOU_library_basic_details = ["EOU", "EOU", "http://alliance-primo.hosted.exlibrisgroup.com", "Eastern Oregon University"];
var EWU_library_basic_details = ["EWU", "EWU", "http://alliance-primo.hosted.exlibrisgroup.com", "Eastern Washington University"];
var GFOX_library_basic_details = ["GFOX", "GFOX", "http://alliance-primo.hosted.exlibrisgroup.com", "George Fox University"];
var LANECC_library_basic_details = ["LANECC", "LANECC" , "http://alliance-primo.hosted.exlibrisgroup.com", "Lane Community College"];
var LCC_library_basic_details = ["LCC", "LCC", "http://primo.lclark.edu", "Lewis & Clark College"];
var LINF_library_basic_details = ["LINF", "LINF", "http://alliance-primo.hosted.exlibrisgroup.com", "Linfield College"];
var MRY_library_basic_details = ["MRY", "MRY", "http://alliance-primo.hosted.exlibrisgroup.com", "Marylhurst University"];
var MHCC_library_basic_details = ["MHCC", "MHCC", "http://alliance-primo.hosted.exlibrisgroup.com", "Mt. Hood Community College"];
var OHSU_library_basic_details = ["OHSU", "OHSU", "http://librarysearch.ohsu.edu", "Oregon Health & Science University"];
var OIT_library_basic_details = ["OIT", "OIT", "http://alliance-primo.hosted.exlibrisgroup.com", "Oregon Institute of Technology"];
var OSU_library_basic_details = ["OSU", "OSU", "http://search.library.oregonstate.edu", "Oregon State University"];
var PU_library_basic_details = ["PU", "PU", "http://alliance-primo.hosted.exlibrisgroup.com", "Pacific University"];
var PCC_library_basic_details = ["PCC", "PCC", "http://alliance-primo.hosted.exlibrisgroup.com", "Portland Community College"];
var PSU_library_basic_details = ["PSU", "PSU", "http://search.library.pdx.edu", "Portland State University"];
var REED_library_basic_details = ["REED", "REED", "http://catalog.library.reed.edu", "Reed College"];
var STMU_library_basic_details = ["STMU", "STMU", "http://alliance-primo.hosted.exlibrisgroup.com", "Saint Martin's University"];
var SPU_library_basic_details = ["SPU", "SPU", "http://alliance-primo.hosted.exlibrisgroup.com", "Seattle Pacfic University"];
var SEAU_library_basic_details = ["SEAU", "SEAU", "http://primo.seattleu.edu", "Seattle University"];
var SOU_library_basic_details = ["SOU", "SOU", "http://alliance-primo.hosted.exlibrisgroup.com", "Southern Oregon University"];
var EVSC_library_basic_details = ["EVSC", "EVSC", "http://alliance-primo.hosted.exlibrisgroup.com", "The Evergreen State College"];
var UID_library_basic_details = ["UID", "UID", "http://search.lib.uidaho.edu", "University of Idaho"];
var UO_library_basic_details = ["UO", "UO", "http://alliance-primo.hosted.exlibrisgroup.com", "University of Oregon"];
var UPORT_library_basic_details = ["UPORT", "UPORT", "http://alliance-primo.hosted.exlibrisgroup.com", "University of Portland"];
var UPUGS_library_basic_details = ["UPUGS", "UPUGS", "http://alliance-primo.hosted.exlibrisgroup.com", "University of Puget Sound"];
var UW_library_basic_details = ["UW", "UW", "http://alliance-primo.hosted.exlibrisgroup.com", "University of Washington"];
var WALLA_library_basic_details = ["WALLA", "WALLA", "http://alliance-primo.hosted.exlibrisgroup.com", "Walla Walla University"];
var WPC_library_basic_details = ["WPC", "WPC", "http://libsearch.warnerpacific.edu", "Warner Pacific College"];
var WSU_library_basic_details = ["WSU", "WSU", "http://searchit.libraries.wsu.edu", "Washington State University"];
var WOU_library_basic_details = ["WOU", "WOU", "http://alliance-primo.hosted.exlibrisgroup.com", "Western Oregon University"];
var WWU_library_basic_details = ["WWU", "WWU", "http://onesearch.library.wwu.edu", "Western Washington University"];
var WHITC_library_basic_details = ["WHITC", "WHITC", "http://sherlock.whitman.edu", "Whitman College"];
var WU_library_basic_details = ["WU", "WU", "http://alliance-primo.hosted.exlibrisgroup.com", "Willamette University Hatfield Library"];
var WU_LAW_library_basic_details = ["WU", "WU_LAW" , "http://alliance-primo.hosted.exlibrisgroup.com", "Willamette University J.W. Long Law Library"];

var institution_name = "Nobody's"

/* Base URL for non-vanity Alliance Libraries */
var domain_name = "http://alliance-primo.hosted.exlibrisgroup.com";


/* initialize variable for institution codes */
var institution_code = "";

/* initialize variable for view codes */
var view_code = "";		


/**********************************************************************
 * Tab Names for Alliance Libraries as of Feb. 2016:
 * Front End: Perform a basic search and from the resulting URL, take
 * the parameter after 'tab='. Do this for each tab.
 *
 * Back Office: Ongoing Configuration Wizard -> Views Wizard
 * For your default (or desired) view, click 'Edit'
 * Click through to 'Tabs', use the attributes in the 'Tab Code' column, 
 *
 * NOTE: TAB CODES MUST BE LOWER CASE! These are the codes to the left of the colon.
 * The value to the right of the colon will display in the drop-down.
 *
 * @var {object} tab_names
 * @example
 * var tab_name = {
 *	  "everything" : "Everything",
 *	  "books" : "Books+",
 *	  "articles" : "Articles+"
 * }
 *********************************************************************/
var tab_names = {
	"default_tab"	: "Primo Search"
}
var COCC_tab_names= {
	"default_tab"	: "Library Resources",
	"cr_tab"		: "Course Reserves"
}
var CWU_tab_names= {
	"default_tab"	: "Default Tab"
}
var CHEMEK_tab_names= {
	"default_tab"	: "Default Tab"
}
var CC_tab_names= {
	"default_tab"	: "Default Tab"
}
var CONC_tab_names= {
	"default_tab"	: "Default Tab"
}
var EOU_tab_names= {
	"default_tab"	: "Default Tab"
}
var EWU_tab_names= {
	"default_tab"	: "Default Tab"
}
var GFOX_tab_names= {
	"default_tab"	: "Default Tab"
}
var LANECC_tab_names= {
	"default_tab"	: "Default Tab"
}
var LCC_tab_names= {
	"default_tab"	: "Default Tab"
}
var LINF_tab_names= {
	"default_tab"	: "Default Tab"
}
var MRY_tab_names= {
	"default_tab"	: "Default Tab"
}
var MHCC_tab_names= {
	"default_tab"	: "Default Tab"
}
var OHSU_tab_names= {
	"default_tab"	: "Default Tab"
}
var OIT_tab_names= {
	"default_tab"	: "Default Tab"
}
var OSU_tab_names= {
	"default_tab"	: "Default Tab"
}
var PU_tab_names= {
	"default_tab"	: "Default Tab"
}
var PCC_tab_names= {
	"default_tab"	: "Default Tab"
}
var PSU_tab_names= {
	"default_tab"	: "Default Tab"
}
var REED_tab_names= {
	"default_tab"	: "Default Tab"
}
var STMU_tab_names= {
	"default_tab"	: "Default Tab"
}
var SPU_tab_names= {
	"default_tab"	: "Default Tab"
}
var SEAU_tab_names= {
	"default_tab"	: "Primo Search",
	"cr_tab"		: "Course Reserves"	
}
var SOU_tab_names= {
	"default_tab"	: "Default Tab"
}
var EVSC_tab_names= {
	"alma_search_tab"	: "Evergreen + Summit",
	"alma_pc_tab"		: "Articles",
	"film_collection"	: "Media Collection",
	"course_reserves"	: "Program Reserves"
}
var UID_tab_names= {
	"default_tab"	: "Default Tab"
}
var UO_tab_names= {
	"default_tab"	: "Articles, books, and more",
	"cr_tab"		: "Course Reserves"			
}
var UPORT_tab_names= {
	"default_tab"	: "Default Tab"
}
var UPUGS_tab_names= {
	"default_tab"	: "Default Tab"
}
var UW_tab_names= {
	"default_tab"	: "Library Resources",
	"cr"			: "Course Reserves"
}
var WALLA_tab_names= {
	"default_tab"	: "Default Tab"
}
var WPC_tab_names= {
	"default_tab"	: "Default Tab"
}
var WSU_tab_names= {
	"default_tab"	: "Default Tab"
}
var WOU_tab_names= {
	"default_tab"	: "Default Tab"
}
var WWU_tab_names= {
	"atwwu"		: "WWU",
	"wwusummit"	: "+ Summit",
	"everything": "+ Summit + Articles"
}
var WHITC_tab_names= {
	"default_tab"	: "Library Resources",
	"cr_tab"		: "Course Reserves",
	"spec_coll"		: "Special Collections"
}
var WU_tab_names= {
	"default_tab"	: "Library Resources",
	"cr"			: "Course Reserves"
}
var WU_LAW_tab_names= {
	"default_tab"	: "Library Resources",
	"cr"			: "Course Reserves"
}


/**********************************************************************
 * Scopes for Alliance Libraries as of Feb 2016:
 * Front End: Perform a basic search using a drop-down list.
 * In the URL, look for the value after &scp.scps=
 * and take everything between 'scope%3A%28' and '%29'
 *
 * Back Office: Ongoing Configuration Wizard -> Views Wizard
 * For your default (or desired) view, click 'Edit'
 * Click through to 'Scopes List', use the attributes in the 'Name' 
 * column for each scope you'd like to have available.
 * The value to the right of the colon will display in the drop-down.
 *
 * @var {object} scopes
 * @example
 * var scopes = {
 *	  "TCC_EVERYTHING" : "All TCC Resources",
 *	  "TCC_Trinity_Library" : "Trinity River Library",
 *	  "TCC_EBOOK" : "Ebooks Only"
 * }
 *********************************************************************/
var scopes = {
	"scope"	: "Scope"
}
var COCC_scopes = {
	"cocc_alma_summit" 	: "COCC + Summit Libraries",
	"primo_central"		: "Article Search"
}
var CWU_scopes= {
	"cwu_alma_summit":"CWU + Summit Libraries",
	"cwu_alma":"CWU Books, Articles, &amp; More",
	"cwu_local":"CWU Physical Materials",
	"worldcat":"Libraries World Wide",
	"default_scope":"Everything"						
}
var CHEMEK_scopes= {
	"everything":"Chemeketa + Summit + Articles",
	"chemek_pci":"Chemeketa+Articles",
	"chemek_alma":"Chemeketa Library",
	"chemek_alma_summit":"Chemeketa + Summit Libraries",
	"primo_central":"Primo Central (Articles)",
	"worldcat":"WorldCat",
	"Ebsco":"Ebsco"				
}
var CC_scopes= {
	"cc_alma":"Clark Libraries",
	"cc_alma_summit":"Clark + Summit Libraries",
	"clark_alma_summit_primo_central":"Clark + Summit + more",
	"cc_cr":"Course Reserves",
	"worldcat":"WorldCat",
	"ebsco":"EBSCO (for test)"					
}
var CONC_scopes= {
	"summit_alma_pc" : "Search books, articles, & more"			
}
var EOU_scopes= {
	"Almost":"Articles, Books, and More",
	"eou_alma":"EOU Library",
	"eou_alma_summit":"EOU + Summit Libraries",
	"primo_central":"Articles only"			
}
var EWU_scopes= {
	"everything":"Books, Articles & More",
	"ewu_only":"EWU Books, Videos & More",
	"ewu_summit_scope":"EWU + Summit Books, Videos & More",
	"ewu_riverpoint":"EWU Spokane Books, Articles & More",
	"WorldCat":"WorldCat"			
}
var GFOX_scopes= {
	"gfox_alma_summit_primocentral":"Everything",
	"gfox_alma_summit":"GFU + Summit",
	"gfox_alma":"GFU",
	"primo_central":"Articles",
	"gfox_cr":"Course Reserves"			
}
var LANECC_scopes= {
	"lanecc_alma_summit":"LCC Library + Summit",
	"lanecc_alma":"LCC Library Only",
	"primo_central":"Article Databases (beta)",
	"everything":"LCC Library + Summit + Article Databases (beta)"			
}
var LCC_scopes= {
	"lcc_local":"L&C",
	"local_nz":"L&C + Summit",
	"lcc_nz_pc":"L&C + Summit + Articles, etc."			
}
var LINF_scopes= {
	"everything":"Linfield + Summit + Articles",
	"Linfield Libraries":"Linfield Libraries",
	"Articles":"Articles",
	"Ebsco":"Ebsco Only"			
}
var MRY_scopes= {
	"Everything":"Shoen, Summit & Articles",
	"Shoen Library":"Shoen Library"			
}
var MHCC_scopes= {
	"mhcc_alma":"MHCC Library"		
}
var OHSU_scopes= {
	"ohsu_alma":"OHSU",
	"ohsu_alma_summit":"OHSU + NW Academic Libraries (Summit)",
	"primo_central":"Articles from selected databases"			
}
var OIT_scopes= {
	"oit_alma_summit_primo_central":"Articles, Books, and More",
	"primo_central":"Articles Only",
	"oit_alma":"Oregon Tech only",
	"summit":"Summit",
	"worldcat":"Libraries Worldwide"		
}
var OSU_scopes= {
	"everything":"Books, media and articles",
	"osu_alma":"At OSU Libraries only",
	"osu_alma_summit":"OSU Libraries + Summit",
	"osu_scarc":"Special Collections and Archives",
	"primo_central":"Articles",
	"osu_cascades":"OSU Cascades"		
}
var PU_scopes= {
	"Everything":"Everything",
	"Pacific University Items only":"Pacific University Items only",
	"Ebsco":"Ebsco",
	"WorldCat":"WorldCat",
	"Articles":"Articles"	
}
var PCC_scopes= {
	"PCC_Summit1":"PCC Library & Summit",
	"pcc_alma":"PCC Library",
	"course_reserves":"Reserves",
	"primo_central":"Articles",
	"Everything1":"Everything"
}
var PSU_scopes= {
	"psu_library_summit":"PSU & Summit Libraries",
	"psu_library":"PSU Library",
	"all":"PSU, Summit & Articles",
	"psu_speccoll":"PSU Special Collections"
}
var REED_scopes= {
	"local":"Reed Library",
	"reed_summit_wc":"Reed + Summit",
	"default_scope":"Reed + Summit + Articles"
}
var STMU_scopes= {
	"SMU_SUMMIT":"Articles, books, and more",
	"st_martins_university":"Saint Martin's University",
	"stmu_abbey":"Abbey Library"
}
var SPU_scopes= {
	"spu_alma_summit":"SPU Library + Summit",
	"spu_alma":"SPU Library",
	"primo_central":"Articles, Books, and More"
}
var SEAU_scopes = {
	"seau_rec_1"	: "SU Libraries, Summit, and Articles",
	"seau_rec_2"	: "Lemieux and Law Libraries",
	"seau_rec_3"	: "Lemieux Library",
	"seau_rec_4"	: "Law Library",
	"seau_rec_5"	: "Summit Libraries",
	"seau_rec_6"	: "Libraries Worldwide",
	"seau_cr"		: "Course Reserves"
}
var SOU_scopes= {
	"sou_alma":"Hannon Library",
	"sou_alma_summit":"Hannon Library + Summit",
	"sou_metasearch":"Articles, Books and More"
}
var EVSC_scopes= {
	"tesc_alma_summit":"Evergreen + Summit",
	"tesc_alma":"Evergreen Only",
	"everything":"Articles, Books, and More"
}
var UID_scopes= {
	"ui_alma":"UI Only (no articles)",
	"ui_alma_summit":"UI and Summit (no articles)",
	"everything":"UI Books, Articles, and More"
}
var UO_scopes = {
	"everything"	 : "UO + Summit + Articles, etc.",
	"uo_alma_summit" : "UO + Summit",
	"uo_alma" 		 : "UO Libraries",
	"uo_curriculum"	 : "Curriculum Collection",
	"uo_docs"		 : "Documents Collection",
	"uo_juvenile"	 : "Juvenile Collection",
	"uo_knightref"	 : "Knight Reference",
	"uo_music"		 : "Music Collection",
	"uo_scua"		 : "Special Collections",
	"primo_central"	 : "Articles"
}
var UPORT_scopes= {
	"up_summit_pc":"UP + Summit + Articles",
	"uport_alma_summit":"UP + Summit",
	"uport_alma":"UP Only"
}
var UPUGS_scopes= {
	"everything":"Collins, Summit and Articles, etc.",
	"C3_UPUGS":"Collins and Summit",
	"upugs_alma":"Collins"
}
var UW_scopes = {
	"all"			 : "Articles, Books, and More",
	"summit"		 : "UW Libraries + Summit",
	"uw"			 : "UW Libraries",
	"gallagher"		 : "Gallagher Law Library",
	"bothell_ccc"	 : "UW Bothell, CCC Library",
	"tacoma"		 : "UW Tacoma Library",
	"SPCOL"			 : "UW Special Collections",
	"course_reserves" : "Course Reserves"
}
var WALLA_scopes= {
	"walla_alma_summit":"WWU &amp; Summit",
	"everything":"Books, Articles, &amp; More",
	"walla_cr":"Course Reserves",
	"walla_alma":"WWU Only",
	"nz":"Summit (NW Libraries)",
	"billings":"Billings Library",
	"career":"Career Center",
	"curriculum":"Curriculum Library",
	"english":"English Dept.",
	"history":"History Dept.",
	"missoula":"Missoula Library",
	"pml":"Peterson Memorial Library (PML)",
	"portland":"Portland Library",
	"rosario":"Rosario Library",
	"music":"Music Dept."
}
var WPC_scopes= {
	"wpcsummit":"WPC & Summit",
	"WorldCat":"Worldwide",
	"LOCAL":"WPC"
}
var WSU_scopes= {
	"WSU_everything":"Articles, Books, and More",
	"WSU_SUMMIT":"WSU Libraries + Summit ",
	"WSU_Pullman":"WSU Pullman",
	"WSU_SPOKANE_RPOINT":"WSU Spokane Academic Library",
	"WSU_TRICITIES":"WSU Tri-Cities ",
	"WSU_VANCOUVER":"WSU Vancouver",
	"WORLDCAT":"WorldCat (beta)"
}
var WOU_scopes= {
	"everything":"WOU, Summit, and Articles, etc.",
	"wou_alma_summit":"WOU and Summit ",
	"wou_alma":"WOU",
	"ebsco":"Ebscohost Databases",
	"worldcat":"WorldCat"
}
var WWU_scopes= {
	"All":"WWU + Summit + Articles",
	"wwu_summit":"WWU Libraries + Summit",
	"Books":"All collections"
}
var WHITC_scopes= {
	"whitc_alma":"Whitman Library",
	"whitc_alma_summit":"Summit ",
	"primo":"Articles",
	"primo_central":"Whitman + Summit + Articles"
}
var WU_scopes = {
	"WU_Libraries_Summit" : "WU Libraries & Summit",
	"WU Libraries" : "WU Libraries",
	"Articles" : "Articles",
	"Hatfield Library" : "Hatfield Library",
	"Law Library" : "Law Library",
	"WU_Reference" : "Hatfield Library Reference",
	"WU_Videos" : "Hatfield Library Videos",
	"WU_Archives" : "WU Archives",
	"Everything" : "Everything"
}
var WU_LAW_scopes = {
	"WU_Libraries_Summit"	: "WU Libraries & Summit",
	"WU Libraries"			: "WU Libraries",
	"Law Library"			: "Law Library"
}	

/**********************************************************************
 * Facets:
 * Front End: Perform a basic search, click a facet, then take the 
 * value after 'fctN='
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, Table Name: Facet Code Fields.
 * Select the codes for facets you would like to have available.
 *
 * @var {object} facet_types
 * @example
 * var facet_types = {
 *	  "facet_none" : "Choose Facet",
 *	  "facet_creator" : "Author/Creator",
 *	  "facet_rtype" : "Resource Type"
 * }
 *********************************************************************/
var facet_types = {
	"facet_none"		: "Choose Facet",
	"facet_rtype"		: "Resource Type",
	"facet_tlevel"		: "Top Level Facet (Full-text of Available)",
	"facet_creationdate" : "Creation Date (Year Range)"
}


/**********************************************************************
 * Facet Values:
 * This object is used for any facet you wish to limit by providing
 * a drop-down list instead of an open text field. These are usually
 * values found in their own Code Table in Back Office. Each attribute
 * must match an attribute from the facet_type object above, followed
 * by a list of options for the drop-down box.
 *
 * Front End: Perform a Basic Search, click a facet, then take the
 * value after 'fctV=' for each facet type.
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, then find the Facet table (for example, 
 * Top Level Facet table or Facet Resource Type table)
 * Use the value after the last period.
 *
 * @var {object} facet_values
 * @example
 * var facet_values = {
 *	  "facet_rtype" : [ <<==Note: This is the facet type from the facet_types object above
 *			{"name" : "Books",	"value" : "books"},
 *			{"name" : "DVDs",	 "value" : "dvds"},
 *			{"name" : "Audio",	"value" : "media"}
 *	  ],
 *	  "facet_tlevel" : [
 *			{"name" : "Full Text Online",	"value" : "online_resources"},
 *			{"name" : "Available in the Library",	"value" : "available" }
 *	  ]
 * }
 **********************************************************************/
var facet_values = {
	"facet_rtype" : [
		{"name" : "Print Books",	"value" : "pbooks"},
		{"name" : "eBooks",	"value" : "books"}, 
		{"name" : "Audio & Video",		"value" : "audio_video"},
		{"name" : "Journals",	"value" : "journals"},
		{"name" : "Articles",	"value" : "articles"}
	],
	
	"facet_tlevel" : [
		{"name" : "Full Text Online",	"value" : "online_resources"},
		{"name" : "Available in the Library",	"value" : "available" }
	]
}


/**********************************************************************
 * Available Field Values:
 * These are the fields that can be searched.
 *
 * Back Office: Advanced Configuration -> All Code Tables
 * Subsystem: Front End, Table Name: Basic Index Fields
 *
 * @var {object} field_names
 * @example
 * var field_names = {
 *	  any: "Everything",
 *	  title: "Title",
 *	  creator: "Creator / Author",
 *	  isbn: "ISBN"
 * }
 **********************************************************************/
var field_names = {
	"any"		: "Everything",
	"title"		: "Title",
	"creator"	: "Creator / Author",
	"sub"		: "Subject",
	"isbn"		: "ISBN",
	"issn"		: "ISSN"
}



/******************************************************************************
* There is probably no need to change anything below this point...
*****************************************************************************/
var pages = {};
for(var x=0; x<10; x++) {
	pages[x] = x+1;
}

var records_per_page = {};
for(var x=10; x<=100; x+=10) {
	records_per_page[x] = x;
}

var sort_types = {
	"default"	: "relevance",
	"date"	: "date",
	"stitle"	: "title",
	"sauthor"	: "author",
	"popularity" : "popularity"
}

var precision = {
	"contains"	 : "Contains",
	"exact"		 : "Exact Match",
	"begins_with" : "Begins With (For Title Searches Only)"
}

var removed_facet_types = {};

$('document').ready( function() {
	$('#hints').hide();
	$('#toggle_hints').on('click', function() {
		$('#hints').toggle();
	});
	
	$('#examples').hide();
	$('#toggle_examples').on('click', function() {
		$('#examples').toggle();
	});
	
	/** populate Primo Information fields */
	if(domain_name.length>0) $('#domain_name').val(domain_name);
	if(institution_code.length>0) $('#institution_code').val(institution_code);
	if(view_code.length>0) $('#view_code').val(view_code);
	
	/** Set up date picker for exact date range */
	$('body').on('focus','.add_datepicker', function() {
		$(this).datepicker({
			dateFormat: 'yymmdd',
			changeMonth: true,
			changeYear: true,
			onClose: function(selectedDate) {
				checkDate($(this),selectedDate);
			}
		});
	});
	
	/** Hide facet values and add_facet_buttons until a facet type is selected */
	$('#facet_values_0').hide();
	$('#add_facet_button_0').hide();
	
	/** populate select elements */
	$.each(alliance_libraries, function(index,value) {
		$('.alliance_libraries').append($("<option>").text(value).attr('value',index));
	});			
	
	$.each(tab_names, function(index,value) {
		$('#search_tab').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(pages, function(index,value) {
		$('#search_page').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(records_per_page, function(index,value) {
		$('#search_rpp').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(field_names, function(index,value) {
		$('#search_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(precision, function(index,value) {
		$('#precision_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(sort_types, function(index,value) {
		$('#sort_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(scopes, function(index,value) {
		$('.scope_field').append($("<option>").text(value).attr('value',index));
	});
	
	$.each(facet_types, function(index,value) {
		$('.facet_type_select').append($("<option>").text(value).attr('value',index));
	});

	/** perform actions when selections are made or buttons clicked */
	$('.facet_type_select').on('change', function() {
		getFacetValue($(this));
	});
	
	$('#add_facet_0').on('click', function() {
		createFacetSelector();
	});
	
	$('#doSubmit').on('click', function() {
		createDeepSearchLink();
	});
	
	$('#doClear').on('click', function() {
		$('.facet_type_select').each(function() {
			var id = $(this).attr('id');
			var index = id.slice(id.lastIndexOf('_'));
			if(index!='_0') {
				$('#facet'+index).remove();
			}
		});
		$('select').each( function() {
			$(this).val($(this).find("option:first").val());
		});
		$('#search_criteria').val('');
		$('#view_label').val('');
		$('#result').val('');
	});
	
	$('#precision_field').on('change', function() {
		if($(this).val() == 'begins_with') {
			$('#search_field').val('title');
		}
	});
	
	$('#search_field').on('change', function() {
		if($(this).val() != 'title') {
			if($('#precision_field').val() == 'begins_with') {
				$('#precision_field').val('contains');
			}
		}
	});
});



/**
 * Creates a facet value drop-down or text field based on the facet type selected
 *
 * @param {object} facet_type_obj - The facet type selected
 */
function getFacetValue(facet_type_obj) {
	$('.facet_type_select').each( function(x, y) {
		var valueSelected = $(this).val();
		var id = $(this).attr('id');
		var index = id.slice(id.lastIndexOf('_'));
		var parent_id = id;
		if(!isEmpty(facet_type_obj)) parent_id = facet_type_obj.attr('id');
		
		if(parent_id == id) {
			$('#facet_value_field'+index).find('option').remove().end(); // remove old values
			
			$('#facet_creationdate_end_date'+index).remove();
			$('#facet_value_end_date'+index).remove();
			$('#to'+index).remove();
			
			switch(true) {
				case (valueSelected=='facet_none'):
					$('#facet_values'+index).hide();
					$('#add_facet_button'+index).hide();
					break;
					
				case (valueSelected=='facet_creationdate'):
					$('#facet_values'+index).show();
					var $start_date = $('<input>', {id:'facet_value_field'+index, name:'facet_value_start_date', class:'date_range', maxlength:'4' });
					var $end_date	= $('<input>', {id:'facet_creationdate_end_date'+index, name:'facet_value_end_date', class:'date_range', maxlength:'4' });
					var $date_range = $('<div>', {class: 'col'});
					var $to = $('<span>', {id:'to'+index,text:' to '});
					$date_range.append($start_date).append($to).append($end_date);
					$('#facet_value_field'+index).replaceWith($date_range);
					$('#add_facet_button'+index).show();
					break;
					
				case (valueSelected=='facet_date_range'):
					$('#facet_values'+index).show();
					var $start_date = $('<input>', {id:'facet_value_field'+index, name:'facet_value_start_date',class:'add_datepicker', maxlength:'10' });
					var $end_date	= $('<input>', {id:'facet_value_end_date'+index, name:'facet_value_end_date',class:'add_datepicker', maxlength:'10' } );
					var $date_range = $('<div>', {class: 'col'});
					var $to = $('<span>', {id:'to'+index,text:' to '});
					$date_range.append($start_date).append($to).append($end_date);
					$('#facet_value_field'+index).replaceWith($date_range);
					$('#add_facet_button'+index).show();
					break;
					
				case (!isEmpty(facet_values[valueSelected])):
					$('#facet_values'+index).show();
					$('#facet_value_field'+index).replaceWith($("<select>").attr('name','facet_value_field'+index).attr('id','facet_value_field'+index));
					$.each(facet_values[valueSelected], function(obj) {
						$('#facet_value_field'+index).append($("<option>").text(facet_values[valueSelected][obj].name).attr('value',facet_values[valueSelected][obj].value));
					});
					$('#add_facet_button'+index).show();
					break;
					
				default:
					$('#facet_values'+index).show();
					$('#facet_value_field'+index).replaceWith($("<input>").attr('type','text').attr('name','facet_value_field'+index).attr('id','facet_value_field'+index));
					$('#add_facet_button'+index).show();
			}
		}
	});
}

/**
 * Adds a row with a facet type selector.
 *
 * Finds the last facet row added and increments the index
 *
 * The manageFacetTypes(string) function called near the end
 * is used to remove a facet type once it has been used.
 * To disable this, comment out the call to 
 * manageFacetTypes('__add'); in function createFacetSelector() and
 * manageFacetTypes(value); in function removeFacetSelector(element)
 *
 */
function createFacetSelector() {
	var last = $('.facet_type_select').last().attr('id');
	var index = last.slice(last.lastIndexOf('_')+1);
	index++;
	
	/** Facet Type Row */
	var $facet_type_label = $("<label for='facet_type_field_"+index+"'>Facet Type</label>");
	var $facet_type_label_div = $('<div>', { class:'col label'});
	$facet_type_label_div.append($facet_type_label);
	
	$('#facet_type_field_'+index).find('option').remove().end();
	
	var $facet_type_input = $('<select>', {id:'facet_type_field_'+index, class:'facet_type_select'});
	var $facet_type_input_div = $('<div>', {class:'col input'});
	$facet_type_input_div.append($facet_type_input);
	
	var $facet_type_div = $("<div>", {id:'facet_types_'+index, class:'col'});
	$facet_type_div.append($facet_type_label_div);
	$facet_type_div.append($facet_type_input_div);
	
	/** Facet Value Row */
	var $facet_value_label = $("<div class='col label'><label for='facet_value_field_"+index+"'>Facet Value</label></div>");
	var $facet_value_input = $("<div class='col'><select id='facet_value_field_"+index+"' class='facet_value_select'></select></div>");
	var $facet_value_div = $("<div>", {id:'facet_values_'+index, class:'col'});
	$facet_value_div.append($facet_value_label);
	$facet_value_div.append($facet_value_input);
	
	/** Facet Add/Remove Buttons */
	var $facet_add_button = $('<input>', { type:'button', value:'+', id:'add_facet_'+index, class:'add_facet_button', click: function() { createFacetSelector(); } });
	var $facet_add_div = $('<div>', { id:'add_facet_button_'+index, class:'col' });
	$facet_add_div.append($facet_add_button);
	
	var $facet_remove_button = $('<input>', { type:'button', value:'-', id:'remove_facet_'+index, class:'remove_facet_button', click: function() { removeFacetSelector($(this)); } });
	var $facet_remove_div = $('<div>', { id:'remove_facet_button_'+index, class:'col' });
	$facet_remove_div.append($facet_remove_button);
	
	/** Create Facet Row */
	var $newFacet = $('<div>', {id: 'facet_'+index, class: 'row'});
	$newFacet.append($facet_type_div);
	$newFacet.append($facet_value_div);
	$newFacet.append($facet_add_div);
	$newFacet.append($facet_remove_div);
	
	/** Add to interface */
	$('#facets').append($newFacet);
	$('#facets').on('change','#facet_type_field_'+index,function() {
		getFacetValue($('#facet_type_field_'+index));
	});

	/** Hide facet value until facet type is selected */
	$('#facet_values_'+index).hide();
	
	/** Remove used facet types from the object so they won't appear in new drop-down lists */
	manageFacetTypes('__add');
	
	/** Populate new facet type drop-down list */
	$my_facet_types = $(facet_types)[0];
	for(var key in $my_facet_types) {
		if(!isEmpty($my_facet_types[key])) {
			$facet_type_input.append($('<option>').text($my_facet_types[key]).attr('value',key));
		}
	}
	
	
}

/**
 * Removes a facet row when the '-' button is clicked
 *
 * The manageFacetTypes(value) function called near the end
 * is used to remove a facet type once it has been used.
 * To disable this, comment out the call to 
 * manageFacetTypes('__add'); in function createFacetSelector() and
 * manageFacetTypes(value); in function removeFacetSelector(element)
 *
 * @param {object} element - The button clicked which has the same index as the facet row
 */
function removeFacetSelector(element) {
	var id = element.attr('id'); 
	var index = id.slice(id.lastIndexOf('_'));
	var value = $('#facet_type_field'+index+' option:selected').val();
	manageFacetTypes(value);
	$('#facet'+index).remove();
}

/**
 * Adds a facet type row when a '+' button is clicked or
 * removes a facet row when a '-' button is clicked. Keeps track of
 * what has been added or removed in arrays.
 *
 * @param {String} status - Either __add for a new facet or the facet type to remove
 */
function manageFacetTypes(status) {
	console.log(status);
	$('.facet_type_select').each( function() {
		var val = $(this).val();
		if(val != 'facet_none' && !isEmpty(val) && status != 'facet_none') {
			if(status=='__add') {
				if(isEmpty(removed_facet_types[val])) {
					removed_facet_types[val] = facet_types[val];
				}
				facet_types[val] = '';
			} else {
				if(!isEmpty(removed_facet_types[status])) {
					facet_types[status] = removed_facet_types[status];
					removed_facet_types[status] = '';
				}
			}
		}
	});
}

/**
 * Handles conditional date for creation_date (exact date range)
 * 
 * @param {obj} element - The start date element
 * @param {string} selectedDate - The conditional date selected
 */
function checkDate(element,selectedDate) {
	console.log(typeof(element));
	if(element.attr('name') == 'facet_value_start_date') {
		var id = element.attr('id'); 
		var index = id.slice(id.lastIndexOf('_'));
		$('#facet_value_end_date'+index).focus();
		$('#facet_value_end_date'+index).datepicker("option","minDate",selectedDate);
		$('#facet_value_end_date'+index).focus(); // refocus or the calendar disappears :(
	}
}

/**
 * Helper function to determine null, undefined, empty variables
 *
 * @param {obj} date - the variable to check
 */
function isEmpty(data) {
	if(typeof(data) == 'number' || typeof(data) == 'boolean') {
		return false;
	}
	if(typeof(data) == 'undefined' || data === null) {
		return true;
	}
	if(typeof(data.length) != 'undefined') {
		return data.length == 0;
	}
	var count=0;
	for(var i in data) {
		if(data.hasOwnProperty(i)) {
			count++;
		}
	}
	return count==0;
}


/**
 * Compiles all data input by the user and creates a widget or link
 *
 */
function createDeepSearchLink() {
	var domain = $('#domain_name').val();
	var institution = $('#institution_code').val();
	var view = $('#view_code').val();
	var label = $('#view_label').val();
	var tab = $('#search_tab').val();
	var page = $('#search_page').val();
	var rpp = $('#search_rpp').val();
	var scope = $('#scope_field').val();
	var field = $('#search_field').val();
	var precision = $('#precision_field').val();
	var criteria = $('#search_criteria').val();
	var srt = $('#sort_field option:selected').text();
	var sortField = $('#sort_field option:selected').val();
	
	var indx = rpp * page + 1;
	
	if(!isEmpty(srt) && srt=='default') {
		srt='';
		sortField='';
	} else {
		srt = '&srt='+srt;
		sortField = '&sortField='+sortField;
	}
	
	var facet_query = '';
	$('.facet_type_select').each( function() {
		var id = $(this).attr('id');
		index = id.slice(id.lastIndexOf('_'));
		
		var type = $('#facet_type_field'+index).val();
		var value = $('#facet_value_field'+index).val();
		
		if(type == 'facet_creationdate') {
			var start_date= $('#facet_value_field'+index).val();
			var end_date= $('#facet_creationdate_end_date'+index).val();
			if(!isEmpty(start_date) && !isEmpty(end_date)) {
				value = '['+start_date+'+TO+'+end_date+']';
			} else {
				value = '';
			}
		}
		
		if(type == 'facet_date_range') {
			var start_date = $('#facet_value_field'+index).val();
			var end_date = $('#facet_value_end_date'+index).val();
			if(!isEmpty(start_date) && !isEmpty(end_date)) {
				facet_query += '&query=dr_s,exact,'+start_date+'&query=dr_e,exact,'+end_date;
				type=value=null;
			}
		}
		
		if(!isEmpty(type) && !isEmpty(value)) {
			if(type.length>0 && value.length>0) {
				facet_query += '&query='+type+',exact,'+value
			}
		}
	});
	
	var url = domain + '/primo_library/libweb/action/dlSearch.do?vid=' + view + '&institution=' + institution + '&tab=' + tab + '&indx=' + indx + '&bulkSize=' + rpp;
	url += srt + sortField;
	if(scope.length>0) url += '&search_scope=' + encodeURIComponent(scope);
	url += '&query='+field+','+precision+',';
	
	/**
	 * facets must come after the query or the first facet will appear in the search box on the results page.
	 */
	if(isEmpty(criteria)) {
		var d = new Date();
		var n = d.getTime();
		$('#result').val('<div>\r	<form>\r		<fieldset>\r			<legend>Search ' + institution_name + ' Primo</legend>\r				<label for="' + n + '">Keywords: </label><input type="text" id="' + n + '"><a class="search_link' + n + '"><button>Search</button></a>\r	<script type="text/javascript">\r	$("a.search_link' + n + '").on("click",function' + n + ');\r	function function'+ n + '(){\r	var target = "');
		$('#result').val($('#result').val() + url + '"');
		$('#result').val($('#result').val() + "+document" + "." + "getElementById" + "('" + n + "')" + "." + "value");
		if(facet_query.length>0) $('#result').val($('#result').val() + '+"' + facet_query + '"');
		$('#result').val($('#result').val() + ";\r	window.open(target,'_blank');\r	}" + "\r	</script" + ">\r		</fieldset>\r	</form>\r</div>");		
		$('#result2').html(" ");
	} else {
		url += encodeURIComponent(criteria);
		if(facet_query.length>0) url += facet_query;
		label = '';
		var link = '<a href="' + url + '" target="_blank">';
		link += isEmpty(label) ? 'Search for ' + criteria : label;
		link += "</a>";
			
		$('#result').val(link);

	
	$('#result').select();
	testtext = $('#result').val();
	$('#result2').html("Test Your Link:<br/>"+testtext);
		
	}	
}

function populate(select){

	if(select == "Select an Alliance Library"){
		institution_name = "Nobody's";
		institution_code = "ALLIANCE";
		view_code = "ALLIANCE";
	}
	
	if(select == "Central Oregon Community College"){
		scopes = COCC_scopes;
		tab_names = COCC_tab_names;
		domain_name = COCC_library_basic_details[2];
		institution_code = COCC_library_basic_details[0];
		view_code = COCC_library_basic_details[1];
		institution_name = COCC_library_basic_details[3];
	}

	if(select == "Central Washington University"){
		scopes = CWU_scopes;
		tab_names = CWU_tab_names;
		domain_name = CWU_library_basic_details[2];
		institution_code = CWU_library_basic_details[0];
		view_code = CWU_library_basic_details[1];
		institution_name =  CWU_library_basic_details[3];
	}

	if(select == "Chemeketa Community College"){
		scopes = CHEMEK_scopes;
		tab_names = CHEMEK_tab_names;
		domain_name = CHEMEK_library_basic_details[2];
		institution_code = CHEMEK_library_basic_details[0];
		view_code = CHEMEK_library_basic_details[1];
		institution_name =  CHEMEK_library_basic_details[3];
	}

	if(select == "Clark College"){
		scopes = CC_scopes;
		tab_names = CC_tab_names;
		domain_name = CC_library_basic_details[2];
		institution_code = CC_library_basic_details[0];
		view_code = CC_library_basic_details[1];
		institution_name =  CC_library_basic_details[3];
	}

	if(select == "Concordia University"){
		scopes = CONC_scopes;
		tab_names = CONC_tab_names;
		domain_name = CONC_library_basic_details[2];
		institution_code = CONC_library_basic_details[0];
		view_code = CONC_library_basic_details[1];
		institution_name =  CONC_library_basic_details[3];
	}

	if(select == "Eastern Oregon University"){
		scopes = EOU_scopes;
		tab_names = EOU_tab_names;
		domain_name = EOU_library_basic_details[2];
		institution_code = EOU_library_basic_details[0];
		view_code = EOU_library_basic_details[1];
		institution_name =  EOU_library_basic_details[3];
	}

	if(select == "Eastern Washington University"){
		scopes = EWU_scopes;
		tab_names = EWU_tab_names;
		domain_name = EWU_library_basic_details[2];
		institution_code = EWU_library_basic_details[0];
		view_code = EWU_library_basic_details[1];
		institution_name =  EWU_library_basic_details[3];
	}

	if(select == "George Fox University"){
		scopes = GFOX_scopes;
		tab_names = GFOX_tab_names;
		domain_name = GFOX_library_basic_details[2];
		institution_code = GFOX_library_basic_details[0];
		view_code = GFOX_library_basic_details[1];
		institution_name =  GFOX_library_basic_details[3];
	}

	if(select == "Lane Community College"){
		scopes = LANECC_scopes;
		tab_names = LANECC_tab_names;
		domain_name = LANECC_library_basic_details[2];
		institution_code = LANECC_library_basic_details[0];
		view_code = LANECC_library_basic_details[1];
		institution_name =  LANECC_library_basic_details[3];
	}

	if(select == "Lewis &amp; Clark College"){
		scopes = LCC_scopes;
		tab_names = LCC_tab_names;
		domain_name = LCC_library_basic_details[2];
		institution_code = LCC_library_basic_details[0];
		view_code = LCC_library_basic_details[1];
		institution_name =  LCC_library_basic_details[3];
	}

	if(select == "Linfield College"){
		scopes = LINF_scopes;
		tab_names = LINF_tab_names;
		domain_name = LINF_library_basic_details[2];
		institution_code = LINF_library_basic_details[0];
		view_code = LINF_library_basic_details[1];
		institution_name =  LINF_library_basic_details[3];
	}

	if(select == "Marylhurst University"){
		scopes = MRY_scopes;
		tab_names = MRY_tab_names;
		domain_name = MRY_library_basic_details[2];
		institution_code = MRY_library_basic_details[0];
		view_code = MRY_library_basic_details[1];
		institution_name =  MRY_library_basic_details[3];
	}

	if(select == "Mt. Hood Community College"){
		scopes = MHCC_scopes;
		tab_names = MHCC_tab_names;
		domain_name = MHCC_library_basic_details[2];
		institution_code = MHCC_library_basic_details[0];
		view_code = MHCC_library_basic_details[1];
		institution_name =  MHCC_library_basic_details[3];
	}

	if(select == "Oregon Health &amp; Science University"){
		scopes = OHSU_scopes;
		tab_names = OHSU_tab_names;
		domain_name = OHSU_library_basic_details[2];
		institution_code = OHSU_library_basic_details[0];
		view_code = OHSU_library_basic_details[1];
		institution_name =  OHSU_library_basic_details[3];
	}

	if(select == "Oregon Institute of Technology"){
		scopes = OIT_scopes;
		tab_names = OIT_tab_names;
		domain_name = OIT_library_basic_details[2];
		institution_code = OIT_library_basic_details[0];
		view_code = OIT_library_basic_details[1];
		institution_name =  OIT_library_basic_details[3];
	}

	if(select == "Oregon State University"){
		scopes = OSU_scopes;
		tab_names = OSU_tab_names;
		domain_name = OSU_library_basic_details[2];
		institution_code = OSU_library_basic_details[0];
		view_code = OSU_library_basic_details[1];
		institution_name =  OSU_library_basic_details[3];
	}

	if(select == "Pacific University"){
		scopes = PU_scopes;
		tab_names = PU_tab_names;
		domain_name = PU_library_basic_details[2];
		institution_code = PU_library_basic_details[0];
		view_code = PU_library_basic_details[1];
		institution_name =  PU_library_basic_details[3];
	}

	if(select == "Portland Community College"){
		scopes = PCC_scopes;
		tab_names = PCC_tab_names;
		domain_name = PCC_library_basic_details[2];
		institution_code = PCC_library_basic_details[0];
		view_code = PCC_library_basic_details[1];
		institution_name =  PCC_library_basic_details[3];
	}

	if(select == "Portland State University"){
		scopes = PSU_scopes;
		tab_names = PSU_tab_names;
		domain_name = PSU_library_basic_details[2];
		institution_code = PSU_library_basic_details[0];
		view_code = PSU_library_basic_details[1];
		institution_name =  PSU_library_basic_details[3];
	}

	if(select == "Reed College"){
		scopes = REED_scopes;
		tab_names = REED_tab_names;
		domain_name = REED_library_basic_details[2];
		institution_code = REED_library_basic_details[0];
		view_code = REED_library_basic_details[1];
		institution_name =  REED_library_basic_details[3];
	}

	if(select == "Saint Martin's University"){
		scopes = STMU_scopes;
		tab_names = STMU_tab_names;
		domain_name = STMU_library_basic_details[2];
		institution_code = STMU_library_basic_details[0];
		view_code = STMU_library_basic_details[1];
		institution_name =  STMU_library_basic_details[3];
	}

	if(select == "Seattle Pacfic University"){
		scopes = SPU_scopes;
		tab_names = SPU_tab_names;
		domain_name = SPU_library_basic_details[2];
		institution_code = SPU_library_basic_details[0];
		view_code = SPU_library_basic_details[1];
		institution_name =  SPU_library_basic_details[3];
	}

	if(select == "Seattle University"){
		scopes = SEAU_scopes;
		tab_names = SEAU_tab_names;
		domain_name = SEAU_library_basic_details[2];
		institution_code = SEAU_library_basic_details[0];
		view_code = SEAU_library_basic_details[1];
		institution_name =  SEAU_library_basic_details[3];
	}
	if(select == "Southern Oregon University"){
		scopes = SOU_scopes;
		tab_names = SOU_tab_names;
		domain_name = SOU_library_basic_details[2];
		institution_code = SOU_library_basic_details[0];
		view_code = SOU_library_basic_details[1];
		institution_name =  SOU_library_basic_details[3];
	}

	if(select == "The Evergreen State College"){
		scopes = EVSC_scopes;
		tab_names = EVSC_tab_names;
		domain_name = EVSC_library_basic_details[2];
		institution_code = EVSC_library_basic_details[0];
		view_code = EVSC_library_basic_details[1];
		institution_name =  EVSC_library_basic_details[3];
	}

	if(select == "University of Idaho"){
		scopes = UID_scopes;
		tab_names = UID_tab_names;
		domain_name = UID_library_basic_details[2];
		institution_code = UID_library_basic_details[0];
		view_code = UID_library_basic_details[1];
		institution_name =  UID_library_basic_details[3];
	}

	if(select == "University of Oregon"){
		scopes = UO_scopes;
		tab_names = UO_tab_names;
		domain_name = UO_library_basic_details[2];
		institution_code = UO_library_basic_details[0];
		view_code = UO_library_basic_details[1];
		institution_name =  UO_library_basic_details[3];
	}
	if(select == "University of Portland"){
		scopes = UPORT_scopes;
		tab_names = UPORT_tab_names;
		domain_name = UPORT_library_basic_details[2];
		institution_code = UPORT_library_basic_details[0];
		view_code = UPORT_library_basic_details[1];
		institution_name =  UPORT_library_basic_details[3];
	}

	if(select == "University of Puget Sound"){
		scopes = UPUGS_scopes;
		tab_names = UPUGS_tab_names;
		domain_name = UPUGS_library_basic_details[2];
		institution_code = UPUGS_library_basic_details[0];
		view_code = UPUGS_library_basic_details[1];
		institution_name =  UPUGS_library_basic_details[3];
	}

	if(select == "University of Washington"){
		scopes = UW_scopes;
		tab_names = UW_tab_names;
		domain_name = UW_library_basic_details[2];
		institution_code = UW_library_basic_details[0];
		view_code = UW_library_basic_details[1];
		institution_name =  UW_library_basic_details[3];
	}
	
	if(select == "Walla Walla University"){
		scopes = WALLA_scopes;
		tab_names = WALLA_tab_names;
		domain_name = WALLA_library_basic_details[2];
		institution_code = WALLA_library_basic_details[0];
		view_code = WALLA_library_basic_details[1];
		institution_name =  WALLA_library_basic_details[3];
	}

	if(select == "Warner Pacific College"){
		scopes = WPC_scopes;
		tab_names = WPC_tab_names;
		domain_name = WPC_library_basic_details[2];
		institution_code = WPC_library_basic_details[0];
		view_code = WPC_library_basic_details[1];
		institution_name =  WPC_library_basic_details[3];
	}

	if(select == "Washington State University"){
		scopes = WSU_scopes;
		tab_names = WSU_tab_names;
		domain_name = WSU_library_basic_details[2];
		institution_code = WSU_library_basic_details[0];
		view_code = WSU_library_basic_details[1];
		institution_name =  WSU_library_basic_details[3];

	}

	if(select == "Western Oregon University"){
		scopes = WOU_scopes;
		tab_names = WOU_tab_names;
		domain_name = WOU_library_basic_details[2];
		institution_code = WOU_library_basic_details[0];
		view_code = WOU_library_basic_details[1];
		institution_name =  WOU_library_basic_details[3];
	}

	if(select == "Western Washington University"){
		scopes = WWU_scopes;
		tab_names = WWU_tab_names;
		domain_name = WWU_library_basic_details[2];
		institution_code = WWU_library_basic_details[0];
		view_code = WWU_library_basic_details[1];
		institution_name =  WWU_library_basic_details[3];
	}

	if(select == "Whitman College"){
		scopes = WHITC_scopes;
		tab_names = WHITC_tab_names;
		domain_name = WHITC_library_basic_details[2];
		institution_code = WHITC_library_basic_details[0];
		view_code = WHITC_library_basic_details[1];
		institution_name =  WHITC_library_basic_details[3];
	}

	if(select == "Willamette University Hatfield Library"){
		scopes = WU_scopes;
		tab_names = WU_tab_names;
		domain_name = WU_library_basic_details[2];
		institution_code = WU_library_basic_details[0];
		view_code = WU_library_basic_details[1];
		institution_name =  WU_library_basic_details[3];
	}
	if(select == "Willamette University J.W. Long Law Library"){
		scopes = WU_LAW_scopes;
		tab_names = WU_LAW_tab_names;
		domain_name = WU_LAW_library_basic_details[2];
		institution_code = WU_LAW_library_basic_details[0];
		view_code = WU_LAW_library_basic_details[1];
		institution_name =  WU_LAW_library_basic_details[3];
	}			

	
	$('#domain_name').val(domain_name);
	$('#institution_code').val(institution_code);
	$('#view_code').val(view_code);
	
	$('#search_tab').find('option').remove().end();
	$.each(tab_names, function(index,value) {
		$('#search_tab').append($("<option>").text(value).attr('value',index));
	});

	$('#scope_field').find('option').remove().end();
	$.each(scopes, function(index,value) {
		$('#scope_field').append($("<option>").text(value).attr('value',index));
	});

}
