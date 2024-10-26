<template>
  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Конечные ОЗ</span>
        <v-stats-input v-model="heroStats.hp.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>ОЗ Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовые ОЗ Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобально здоровье Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Конечная атака</span>
        <v-stats-input v-model="heroStats.atk.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовая атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальная атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Конечная ЗАЩ</span>
        <v-stats-input v-model="heroStats.def.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>ЗАЩ Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовая защита Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.def.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.def.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.def.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.def.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.def.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.def.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.def.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.def.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальная защита Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.def.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.def.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.def.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.def.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.def.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.def.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Максимальная скорость атаки</span>
        <v-stats-input v-model="heroStats.atkSpeed.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Скорость атаки Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.accessory" placeholder="Рост приключений, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовое увеличение процента скорости атаки Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.atkSpeed.stats.base.tech" placeholder="Технология, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Текущий бонус к скорости атаки в процентах Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.global.class" placeholder="Класс, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Шанс крита</span>
        <v-stats-input v-model="heroStats.critRate.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <v-stats-input v-model="heroStats.critRate.stats.equipment" placeholder="Снаряжение, %" />
      <v-stats-input v-model="heroStats.critRate.stats.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.critRate.stats.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.critRate.stats.artifact" placeholder="Артефакт, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Шанс комбо</span>
        <v-stats-input v-model="heroStats.comboRate.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <v-stats-input v-model="heroStats.comboRate.stats.equipment" placeholder="Снаряжение, %" />
      <v-stats-input v-model="heroStats.comboRate.stats.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.comboRate.stats.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.comboRate.stats.artifact" placeholder="Артефакт, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Шанс контратаки</span>
        <v-stats-input v-model="heroStats.counterRate.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <v-stats-input v-model="heroStats.counterRate.stats.equipment" placeholder="Снаряжение, %" />
      <v-stats-input v-model="heroStats.counterRate.stats.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.counterRate.stats.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.counterRate.stats.artifact" placeholder="Артефакт, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Коэффициент обыч. АТК</span>
        <v-stats-input v-model="heroStats.basicAtkMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Коэффициент обыч. АТК Сумма</template>
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Урон обычной атаки Сумма</template>
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.base.handbook" placeholder="Атлас, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.base.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.base.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.base.accessory" placeholder="Украшение, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальный урон обычной атаки Сумма</template>
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.global.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.basicAtkMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Крит. урон</span>
        <v-stats-input v-model="heroStats.critMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Крит. урон Сумма</template>
      <v-stats-input v-model="heroStats.critMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
      <v-stats-input v-model="heroStats.critMultiplier.stats.total.pal" placeholder="Партнер, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Бонус крит. урона Сумма</template>
      <v-stats-input v-model="heroStats.critMultiplier.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.critMultiplier.stats.base.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.critMultiplier.stats.base.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.critMultiplier.stats.base.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.critMultiplier.stats.base.accessory" placeholder="Украшение, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальный крит. урон Сумма</template>
      <v-stats-input v-model="heroStats.critMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Коэффициент комбо</span>
        <v-stats-input v-model="heroStats.comboMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Коэффициент комбо Сумма</template>
      <v-stats-input v-model="heroStats.comboMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Урон комбо-атак Сумма</template>
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.class" placeholder="Класс, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.handbook" placeholder="Атлас, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.base.avian" placeholder="Летучий питомец, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Урон от глобального комбо Сумма</template>
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.statue" placeholder="Статуя, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.comboMultiplier.stats.global.avian" placeholder="Летучий питомец, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Коэффициент контратаки</span>
        <v-stats-input v-model="heroStats.counterMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Коэффициент контратаки Сумма</template>
      <v-stats-input v-model="heroStats.counterMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Урон контратаки Сумма</template>
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.class" placeholder="Класс, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.handbook" placeholder="Атлас, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.base.avian" placeholder="Летучий питомец, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Урон от глобальной контратаки Сумма</template>
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.statue" placeholder="Статуя, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.counterMultiplier.stats.global.avian" placeholder="Летучий питомец, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Урон навыка</span>
        <v-stats-input v-model="heroStats.skillMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Урон навыка Сумма</template>
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.skillMultiplier.stats.total.avian" placeholder="Летучий питомец, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовый урон навыка Сумма</template>
      <v-stats-input v-model="heroStats.skillMultiplier.stats.base.mount" placeholder="Скакун, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальный урон навыка Сумма</template>
      <v-stats-input v-model="heroStats.skillMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Шанс крита навыка</span>
        <v-stats-input v-model="heroStats.skillCritRate.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <v-stats-input v-model="heroStats.skillCritRate.stats.equipment" placeholder="Снаряжение, %" />
      <v-stats-input v-model="heroStats.skillCritRate.stats.class" placeholder="Класс, %" />
      <v-stats-input v-model="heroStats.skillCritRate.stats.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.skillCritRate.stats.relic" placeholder="Реликвия, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Крит. урон навыков</span>
        <v-stats-input v-model="heroStats.skillCritMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <v-stats-input v-model="heroStats.skillCritMultiplier.stats.initial" placeholder="Первичные хар-ки, %" />
      <v-stats-input v-model="heroStats.skillCritMultiplier.stats.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.skillCritMultiplier.stats.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.skillCritMultiplier.stats.accessory" placeholder="Украшение, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>
      <v-container direction="horizontal" :gap="16" justify="space-between">
        <span>Урон партнера</span>
        <v-stats-input v-model="heroStats.palMultiplier.final" disabled />
      </v-container>
    </template>

    <el-card style="margin-top: 20px">
      <template #header>Урон партнера Сумма</template>
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.initial" placeholder="Первичные хар-ки, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.enchant" placeholder="Зачарование артефакта, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.palMultiplier.stats.total.avian" placeholder="Летучий питомец, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовый урон партнера Сумма</template>
      <v-stats-input v-model="heroStats.palMultiplier.stats.base.mount" placeholder="Скакун, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальный урон партнера Сумма</template>
      <v-stats-input v-model="heroStats.palMultiplier.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Шанс крита партнера</template>
      <v-stats-input v-model="heroStats.palCritRate" placeholder="Шанс крита партнера, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит'" />
    </el-card>
    <el-card style="margin-top: 20px">
      <template #header>Шанс комбо партнера</template>
      <v-stats-input v-model="heroStats.palComboRate" placeholder="Шанс комбо партнера, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Комбо'" />
    </el-card>
    <el-card style="margin-top: 20px">
      <template #header>Крит урон партнера</template>
      <v-stats-input v-model="heroStats.palCritMultiplier" placeholder="Крит урон партнера, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит. урон'" />
    </el-card>
    <el-card style="margin-top: 20px">
      <template #header>Коэффициент комбо партнера</template>
      <v-stats-input v-model="heroStats.palComboMultiplier" placeholder="Коэффициент комбо партнера, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Коэффициент комбо'" />
    </el-card>
  </el-card>

  <el-divider />

  <div>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" style="width: 100%" @click="saveStats">Сохранить статы в браузере</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 16px">
      <el-col :span="24">
        <el-button style="width: 100%" @click="downloadStats">Экспортировать статы (json-файл)</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 16px">
      <el-col :span="24">
        <v-file-uploader trigger-text="Импортировать статы (json-файл)" @change="handleUploadedFile" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import VContainer from '@/components/common/VContainer.vue'
import VFileUploader from '@/components/common/VFileUploader.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { useHeroStats } from '@/composable/useHeroStats'
import { downloadObjectAsJSON } from '@/utils/downloadObjectAsJSON'
import { readFileAsJSON } from '@/utils/readFileAsJSON'

const { key, heroStats, saveStats } = useHeroStats()

const downloadStats = () => {
  downloadObjectAsJSON(heroStats.value, key)
}

const handleUploadedFile = async (uploadedFile: File) => {
  const result = await readFileAsJSON<typeof heroStats.value>(uploadedFile)

  if (result) {
    heroStats.value = result
  }
}
</script>
