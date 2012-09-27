using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;

namespace flot_graphing_example
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = p => "Hello Nancy";
        }
    }
}