using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class BabyModel
    {
        public int Id { get; set; }
        [Column(TypeName = "varchar")]
        public string Name { get; set; }

        [Column(TypeName = "varchar")]
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public decimal Weight { get; set; }
    }
}
