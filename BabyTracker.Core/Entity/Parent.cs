using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabyTracker.Core.Entity
{
    public class Parent
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar")]
        public string ParentName { get; set; }

        public Baby Baby { get; set; }
    }
}
