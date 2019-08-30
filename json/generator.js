[
    {
      'repeat(100)': {
        id: '{{index()+1}}',
        guid: '{{guid()}}',
        isActive: '{{bool()}}',
        balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
        picture: 'http://placehold.it/32x32',
        age: '{{integer(20, 40)}}',
        eyeColor: '{{random("blue", "brown", "green")}}',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        company: '{{company().toUpperCase()}}',
        email(tags) {
          return `${this.name.first}.${this.name.last}@${this.company}${tags.domainZone()}`.toLowerCase();
        },
        phone: '+1 {{phone()}}',
        address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
      }
    }
  ]