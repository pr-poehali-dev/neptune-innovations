import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ООО «ЛКП-ЭКСПЕРТ»</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О компании
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Проекты
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Получить расчёт
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="ShieldCheck" className="w-3 h-3 mr-1" />
                    Лицензированная огнезащита
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Защита металла
                    <span className="text-primary block">от огня и коррозии</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Профессиональная огнезащитная обработка металлоконструкций для промышленных и гражданских объектов.
                    Соответствие нормам пожарной безопасности, гарантия качества, сжатые сроки.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Получить расчёт
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Смотреть проекты
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Огнезащитная обработка"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-green-plants-and-hanging-gardens-in-cafe.jpg"
                  alt="Металлоконструкции"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/artisan-coffee-and-pastries-on-wooden-table.jpg"
                  alt="Промышленный объект"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Контроль качества"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">КАК МЫ РАБОТАЕМ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Полный цикл огнезащитной обработки — от обследования объекта до выдачи документации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ClipboardList" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Обследование</h3>
              <p className="text-muted-foreground">
                Выезжаем на объект, оцениваем объём работ, определяем требуемый предел огнестойкости и подбираем состав.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Flame" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Обработка</h3>
              <p className="text-muted-foreground">
                Наносим сертифицированные огнезащитные составы на металлоконструкции с соблюдением технологии и нормативов.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FileCheck" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Документация</h3>
              <p className="text-muted-foreground">
                Предоставляем полный пакет исполнительной документации и акты выполненных работ для пожарной инспекции.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Сетка проектов */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">ВЫПОЛНЕННЫЕ ПРОЕКТЫ</h2>
            <Button variant="outline">Все проекты</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Промышленный завод"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Завершён</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Промышленный завод</h3>
                <p className="text-muted-foreground mb-4">Обработка несущих конструкций цеха, 4 200 м²</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    18 дней
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="ShieldCheck" className="w-4 h-4" />
                    R60
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="Торговый центр"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Завершён
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Торговый центр</h3>
                <p className="text-muted-foreground mb-4">Огнезащита перекрытий и колонн, 8 700 м²</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    35 дней
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="ShieldCheck" className="w-4 h-4" />
                    R90
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/electronic-ambient-musician-with-synthesizers-and-.jpg"
                  alt="Складской комплекс"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  В работе
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Складской комплекс</h3>
                <p className="text-muted-foreground mb-4">Обработка стропильных ферм и балок, 12 000 м²</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    45 дней
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="ShieldCheck" className="w-4 h-4" />
                    R120
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О компании */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Надёжная защита металлоконструкций с гарантией</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Мы специализируемся на огнезащитной обработке металлоконструкций для промышленных, коммерческих и
                  гражданских объектов. Работаем с сертифицированными составами ведущих производителей, обеспечивая
                  предел огнестойкости от R30 до R120.
                </p>
                <p>
                  Имеем все необходимые лицензии МЧС, выполняем работы в соответствии с СП 2.13130 и ГОСТ, предоставляем
                  полную исполнительную документацию для сдачи объекта.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Объектов сдано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">10 лет</div>
                  <div className="text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Наша команда за работой"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Готовы защитить ваш объект?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Оставьте заявку — выедем на обследование, рассчитаем стоимость и сроки. Работаем по всей России,
            соблюдаем нормативы пожарной безопасности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Получить расчёт
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">ООО «ЛКП-ЭКСПЕРТ»</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Профессиональная огнезащитная обработка металлоконструкций. Лицензия МЧС, сертифицированные составы,
                полная исполнительная документация.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Промышленная, 1</p>
                <p>Пн–Пт 9:00 – 18:00</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@ogneschit.ru</p>
              </div>
            </div>
            <div id="services">
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Огнезащита металла</p>
                <p>Огнезащита дерева</p>
                <p>Огнезащита кабелей</p>
                <p>Техническое обследование</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 ООО «ЛКП-ЭКСПЕРТ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;