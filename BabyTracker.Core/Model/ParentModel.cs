using BabyTracker.Core.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Model
{
    public class ParentModel
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar")]
        public string? ParentName { get; set; }

        //public BabyModel Baby { get; set; } //subject to change

    }
}
