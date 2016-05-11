﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unicorn.Cms.Models.Domain
{
	public class Media : IEntity<int>
	{
		public int Id { get; set; }
		public string Url { get; set; }
		public MediaType Type { get; set; }
	}
}
