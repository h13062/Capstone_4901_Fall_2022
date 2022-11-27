using BabyTracker.Core.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class BabySitterModel
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar")]
        public string? BabySitterName { get; set; }

        public int BabyId { get; set; } //subject to change
    }
}
