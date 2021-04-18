import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutPelakusInput } from "../inputs/RenamedcaseCreateOrConnectWithoutPelakusInput";
import { RenamedcaseCreateWithoutPelakusInput } from "../inputs/RenamedcaseCreateWithoutPelakusInput";
import { RenamedcaseUpdateWithoutPelakusInput } from "../inputs/RenamedcaseUpdateWithoutPelakusInput";
import { RenamedcaseUpsertWithoutPelakusInput } from "../inputs/RenamedcaseUpsertWithoutPelakusInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutPelakusInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPelakusInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutPelakusInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutPelakusInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutPelakusInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutPelakusInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutPelakusInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutPelakusInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutPelakusInput | undefined;
}
