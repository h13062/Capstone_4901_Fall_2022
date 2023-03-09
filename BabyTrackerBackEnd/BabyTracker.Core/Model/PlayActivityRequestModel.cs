using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class PlayActivityRequestModel
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string PlayStart { get; set; }
        public string PlayEnd { get; set; }
    }
}
